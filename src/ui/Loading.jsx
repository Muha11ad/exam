import React from 'react'

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[600px]">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-800 animate-spin">
        </div>
    </div>
</div>
  )
}
