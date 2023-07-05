import TableDoctor from './componentsAdmin/TableDoctor'
function DoctorManage() {
  return (
    <section className="w-full bg-slate-200 overflow-y-auto  grid-rows-4 items-center ">
        <div>
          <TableDoctor/>
        </div>
    </section>
  )
}

export default DoctorManage