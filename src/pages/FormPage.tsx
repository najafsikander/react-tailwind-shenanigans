import Form from "../components/Form";
const FormPage = () => {
    return (
        <>
            <section className="w-full bg-white flex justify-center">
                <div className="w-[80%] h-[50vh] text-center mt-20 border-2 text-2xl rounded-md border-grey shadow-xl px-4 py-4 shadow-md">
                   <Form/> 
                </div>
            </section>
        </>
    )
}
export default FormPage;