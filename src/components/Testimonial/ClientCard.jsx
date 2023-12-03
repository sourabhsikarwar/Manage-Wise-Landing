import React from 'react'

const ClientCard = ({item}) => {
  return (
    <div key={item.id} className='rounded-large border border-gray-200 p-16 flex flex-col justify-between gap-8 w-96 mx-2'>
        <p className='text-xl font-medium text-textHead'>"{item.feedback}</p>
        <div className='flex gap-4 items-center'>
            <img src={item.img} alt="client" className='w-16 rounded-full' />
            <div>
                <h1 className='text-xl font-semibold text-textHead'>{item.name}</h1>
                <p className='text-md font-medium text-textPara'>{item.job}</p>
            </div>
        </div>
    </div>
  )
}

export default ClientCard