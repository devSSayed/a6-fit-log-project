import PlanPageCards from './CSR Components/PlanPageCards';
import PlanPageTabs from './CSR Components/PlanPageTabs';
import PlanPageSummaryBox from './CSR Components/PlanPageSummaryBox';
import PlanPageSortBox from './CSR Components/PlanPageSortBox';


const MyPlanPage = () => {

    return (
        <section className='container mx-auto mt-14 flex flex-col gap-8'>
            {/* header/names */}
            <div className='flex flex-col gap-1'>
                <h2 className='font-oswald font-bold text-4xl text-[#FFFFFF]'>MY PLAN</h2>
                <p className='font-inter text-[15px] text-[#8A92A0]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {/* number boxes */}

            <PlanPageSummaryBox />

            {/* number boxes end */}


            {/* Tab start */}

            <div className='flex justify-between items-center'>

               <PlanPageTabs />



                {/* Tab end */}

                {/* Select start */}

                <PlanPageSortBox />
            </div>

            {/* Select end */}

            {/* Workout Content */}


            <PlanPageCards />



        </section>
    );
};

export default MyPlanPage;