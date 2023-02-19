import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from './../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageSpecialists = () => {
    const [deletingSpecialist,setDeletingSpecialist]= useState(null);

    const closeModal = ()=>{
        setDeletingSpecialist(null);
    }


   

    const {data:specialists,isLoading,refetch} = useQuery({
        queryKey:['specialists'],
        queryFn: async()=>{
            try{
      const res =await  fetch('http://localhost:5000/specialists',{
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
            }
            catch(error){

            }
        }
    });
    const handleDeleteSpecialist = specialist=>{
        fetch(`http://localhost:5000/specialists/${specialist._id}`,{
          method:'DELETE',
          headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
  
        })
        .then(res => res.json())
        .then(data=>{
          console.log(data);
          if(data.deletedCount>0){
            refetch();
            toast.success(`Specialist ${specialist.name} deleted successfull `);
          }
       
        })
      }

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Manage Specialists:{specialists?.length}</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        specialists.map((specialist,i)=><tr
        
        key={specialist._id}
        >
            <th>{i+1}</th>
            <td>
            <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={specialist.image} alt="/" />
  </div>
</div>
            </td>
            <td>{specialist.name}</td>
            <td>{specialist.email}</td>
            <td>{specialist.specialty}</td>
            <td>

                <label onClick={()=>setDeletingSpecialist(specialist)} htmlFor="confirmation-modal" className="btn bg-red-700 hover:bg-red-800 btn-sm">Delete</label>
               </td>
           
          </tr>)
      }
     
    </tbody>
  </table>
</div>
{
    deletingSpecialist && <ConfirmationModal
    title={`Are you sure you want to delete?`}
    message={`If you delete ${deletingSpecialist.name}.It can't be undone`}
    successAction={handleDeleteSpecialist}
    successButtonName="Delete"
    modalData={deletingSpecialist}
    closeModal= {closeModal}

    >
   

    </ConfirmationModal>

}
        </div>
    );
};

export default ManageSpecialists;