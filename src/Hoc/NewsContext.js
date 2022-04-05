import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';


export const NewsContext = createContext()


export const NewsContextProvider = (props)=>{
    const[blogs, setBlogs] = useState([])
    const[isLoading, setIsLoading] = useState(true)
    const[search, setSearch] = useState(null)
    const[data, setData] = useState([])
    
    
    const handleChange =(e)=>{
        setSearch(e.target.value)
    }
  
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(search && blogs){
           const datafiltered = blogs.filter((item)=>  item.title.toLowerCase().includes(search.toLowerCase()));
            setData(datafiltered)
            setSearch('')
        }
    }
    
    useEffect(()=>{
        axios.get(`https://6232e9536de3467dbac2f604.mockapi.io/news`)
        .then((response)=>{
            setBlogs(response.data[0].articles)
            setIsLoading(false)
            console.log(blogs)
        })
        .catch(err => console.log(err.message))
        
    },[])
    



    return(
        <NewsContext.Provider value={{blogs,isLoading, search, handleChange, handleSubmit, data}}>
            {props.children}
        </NewsContext.Provider>
    )
}