import React from 'react'
import { useQuery } from 'react-query'

const Test1 = () => {
  // const { isLoading, data, error } = useQuery('githubData', apiCall)

  // function apiCall() {
  //   return fetch("https://api.github.com/repos/shobanapriyams/React-basics").then(
  //     (res) => res.json())
  // }

  // if (isLoading) {
  //   return <h1>Loading...</h1>
  // }

  // if (error) {
  //   return <h1>An error occured</h1>
  // }

  // console.log(data)
  // return (
  //   <div> My data
  //     <h1>{data.subscribers_count}</h1>
  //   </div>
  // )
  const url1 = "https://api.github.com/repos/shobanapriyams/React-basics"
  const url2 = "https://api.github.com/repos/shobanapriyams/lyrics-writer-angular"
  const repo1 = useQuery(["githubData",url1],apiCall)
  const repo2 = useQuery(["githubData",url2],apiCall)

  function apiCall({queryKey}) {
    return fetch(queryKey[1]).then((res)=>res.json())
  }

  if(repo1.isLoading || repo2.isLoading) {
    return <h1>Loading...</h1>
  }

  if(repo1.error || repo2.error) {
    return <h1>An error occured {error}</h1>
  }

  console.log(data)

  return(
    <div>My repo datas
      <h1>Repo name: {repo1.data.name}</h1>
      <h1>Repo description: {repo1.data.description}</h1>
      <h1>Repo language: {repo1.data.language}</h1>
      <h1>Repo subscribers count: {repo1.data.subscribers_count}</h1>
      <h1>Repo name: {repo2.data.name}</h1>
      <h1>Repo description: {repo2.data.description}</h1>
      <h1>Repo language: {repo2.data.language}</h1>
      <h1>Repo subscribers count: {repo2.data.subscribers_count}</h1>
    </div>
  )
}

export default Test1