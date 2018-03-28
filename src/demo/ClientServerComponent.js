import React, { Component } from 'react';

const ClientServerComponent = (props) => {
  const doRequestWithFetch = () => {
    fetch('http://10.28.6.1:8080/people').then(function(response){
      if (response.status == 200){
      response.json().then(function(data){
        alert("Result: " + data[5].lastname)
      })
      }
    }).catch(function(err){
      alert("Something went wrong: " + err)
    });
  }

  async function doRequestWithAsyncAwait() {
    try{
      let result = await fetch('http://10.28.6.1:8080/people')
      let data = await result.json()
      alert("Result: " + data[5].lastname)
    }
    catch(err){
      alert("Something went wrong: " + err)
    }
  }


  //doRequestWithFetch()
  doRequestWithAsyncAwait()
  return (
      <div>
      TODO Implement Component
      </div>

  )
}
export {ClientServerComponent}
