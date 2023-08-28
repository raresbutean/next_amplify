'use client'

import { Amplify, API, DataStore, Storage } from 'aws-amplify'
import awsmobile from './aws-exports'
import { User } from './models'
import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import UserCreateForm from './ui-components/UserCreateForm'
import '@aws-amplify/ui-react/styles.css';
import NewPost from './ui-components/NewPost'


Amplify.configure(awsmobile)

const handleAddPost = async ()=>{
  const user = await DataStore.save(
    new User({
      name:"Rares",
      joinDate: new Date().toISOString()
      })      
  )
  console.log(user);
}

const handleSignUp = async () => {
  try{
    const {user} = await Auth.signUp({
      username:'buteanrares@gmail.com',
      password:'Sedintoman140500!',
      attributes:{
        email:'buteanrares@gmail.com',
        name: 'Rares Butean'
      },
      autoSignIn:{
        enabled:true
      }
    })
    console.log(user);
  }catch(e){
    console.error(e);
    
  }
}

async function handleUpload(e) {
  const file = e.target.files[0];
  try {
    console.log(await Storage.list('public/dog.jpg'));
    
    await Storage.put(file.name, file, {
      contentType: "image/png", // contentType is optional
      progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      },
    });
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  const [users,setUsers] = useState([])
  DataStore.query(User)
  .then(res=>{
    setUsers(res)
  })

  useEffect(()=>{
    Storage.get('public/dog.jpg')
    .then(res=>console.log(res));
  },[])

  return <>
      <button onClick={handleAddPost}>add post</button>
      <input type="file" onChange={handleUpload} />
      <UserCreateForm width={"33vmax"}/>
      <NewPost/>
      <div>
        <h1>Users:</h1>
        {users.map(user=>(
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      </>
}
