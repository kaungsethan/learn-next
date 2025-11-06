"use client"
import React, { useState } from 'react';
import Decrement from './Decrement';
import Reset from './Reset';
import Increment from './Increment';
import useCounterStore from '@/store/useCounterStore';

function CountSection() {
 const {count} = useCounterStore();
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 w-80">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Counter
        </h2>
        
        <div className="text-center mb-6">
          <span className="text-6xl font-bold text-blue-600">{count}</span>
        </div>

        <div className="flex gap-3 justify-center">
          <Decrement />
          <Reset />
          <Increment />
        </div>
      </div>
    </section>
  );
}

export default CountSection;