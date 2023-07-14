import Spinner from '../../../../layouts/components/spinner/Spinner'

function SpinnerCharger() {
  return (
    <div className="py-16 bg-teal-700 rounded-xl transition-all  ease-out w-80 mt-10 flex text-white font-bold flex-col items-center">
        <p className="mb-2 text-xl">Buscando paciente . . .</p>
        <Spinner/>
    </div>
  )
}

export default SpinnerCharger