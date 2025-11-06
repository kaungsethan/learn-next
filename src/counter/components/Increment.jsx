import useCounterStore from '@/store/useCounterStore';

const Increment = () => {

  const {increment} = useCounterStore();
  const handlePlus = () => {
    increment();
  }
  return (
    <div>
        <button
            onClick={handlePlus}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
          >
            +
          </button>
    </div>
  )
}

export default Increment