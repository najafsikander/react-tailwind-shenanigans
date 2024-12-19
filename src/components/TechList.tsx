import TechCard from "./TechCard";
import reactLogo from '../assets/react.svg';
import zodLogo from '../assets/svgs/zod.svg';
import reactQueryLogo from '../assets/svgs/reactquery.svg';
import reactRouterLogo from '../assets/svgs/reactrouter.svg';

type techStack = {
    label: string,
    logo: string
};
const techStackList: Array<techStack> = [
    {
        label: 'Zod',
        logo: zodLogo,
    },
    {
        label: 'React-Form-Hook',
        logo: reactLogo
    },
    {
        label: 'React-Query',
        logo: reactQueryLogo
    },
    {
        label: 'React-Router',
        logo: reactRouterLogo
    }
]
const TechList:React.FC = () => {
    return (
        <>
        <section className="w-full h-64 bg-white flex justify-center items-center gap-3 my-6 flex-wrap">
         {
            techStackList.map((techStack:techStack) => (<TechCard key={techStack.label} label={techStack.label} logo={techStack.logo}/>))
         }
        </section>
        </>
    );
}

export default TechList;