import useCounterStore from '@/store/useCounterStore';

const Reset = () => {

  const {reset} = useCounterStore();
    const handleReset = () => {
    reset();
  }
  return (
    <div>
        <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
          >
            Reset
          </button>
    </div>
  )
}

export default Reset