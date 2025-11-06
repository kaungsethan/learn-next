import useCounterStore from '@/store/useCounterStore'

const Decrement = () => {

  const {decrement,count} = useCounterStore();
  const handleMinus = () => {
    count > 0 && decrement();
  }
  return (
    <div>
        <button
            onClick={handleMinus}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex-1"
          >
            -
          </button>
    </div>
  )
}

export default Decrement