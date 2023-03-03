import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import Loading from './../../Shared/Loading/Loading';
import ConfirmationModal from './../../Shared/ConfirmationModal/ConfirmationModal';


const AllUsers = () => {
  const [deletingUser,setDeletingUser]= useState(null);
  const closeModal = ()=>{
    setDeletingUser(null);
}

    const {data:users=[], refetch,isLoading} =useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

  const handleMakeAdmin = id =>{
    fetch(`http://localhost:5000/users/admin/${id}`,{
      method: 'PUT', 
      headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
  })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount > 0){
        toast.success('Make admin successfull.')
        refetch();
    }
    })
  }
  const handleDeleteUser = users=>{
    fetch(`http://localhost:5000/users/${users._id}`,{
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
        toast.success(`Specialist ${users.name} deleted successfull `);
      }
   
    })
  }

if(isLoading){
    return <Loading></Loading>
}
    return (
        <div>
            <h2 className='text-3xl'>All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
{
          users.map((user,i)=>
            <tr key={user._id}>
              <th>{i+1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
              
              {/* <td>{user?.role === 'admin' &&<button onClick={()=>setDeletingUser(user._id)} htmlFor="confirmation-modal"  className='btn  btn-xs bg-red-600'>Delete</button>}</td> */}
              <td>
              <label onClick={()=>setDeletingUser(user)} htmlFor="confirmation-modal" className="btn bg-red-700 hover:bg-red-800 btn-sm">Delete</label>
              </td>
            </tr>)
}
      
     
    </tbody>
  </table>
</div>
{
    deletingUser && <ConfirmationModal
    title={`Are you sure you want to delete?`}
    message={`If you delete ${deletingUser.name}.It can't be undone`}
    successAction={handleDeleteUser}
    successButtonName="Delete"
    modalData={deletingUser}
    closeModal= {closeModal}

    >
   

    </ConfirmationModal>

}
        </div>
        
    );
};

export default AllUsers;