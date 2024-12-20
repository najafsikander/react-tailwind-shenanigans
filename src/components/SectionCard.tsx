type Props = {
  children: React.ReactNode;
  height?: string
};

const SectionCard: React.FC<Props> = ({ children,height='50vh' }) => {
  return (
    <>
      <section className="w-full bg-white flex justify-center">
        <div className={`w-[80%] h-[${height}] text-center mt-20 border-2 text-2xl rounded-md border-grey shadow-xl px-4 py-4`}>
        {children}
        </div>
      </section>
      
    </>
  );
};

export default SectionCard;
