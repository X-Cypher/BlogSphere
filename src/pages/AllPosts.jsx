import React from 'react'
import postService from '../appwrite/posts'
import {Container, PostCard} from '../components'
import { useState, useEffect } from 'react'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getAllPosts()
        .then((response) => {
            if(response){
                setPosts(response.documents)
            }
        })
    })
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'> 
                {posts.map((currPost) => ( //loop lga ke har ek post ke liye ek card bnao
                    <div key={currPost.$id} className='p-2 w-1/4'>
                        <PostCard {...currPost} />
                    </div>
                    )
                )}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts