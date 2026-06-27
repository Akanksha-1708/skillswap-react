// The const steps = [...] array, and steps.map() function that renders the cards.
// const is used to create a variable whose reference cannot be reassigned
// Instead of writing four cards manually, React can use this array to generate them automatically, map() loops through every item in array and return new array

const steps=[
    {
        id:1,
        title:"Create Profile",
        description:"Add skills you can teach and skills you want to learn.",
    },
    {
        id:2,
        title:"Match",
        description:"Find students who want your skills.",
    },
    {
        id:3,
        title:"Exchange",
        description:"Teach and learn via chat or video calls.",
    },
    {
        id:4,
        title:"Grow",
        description:"Earn ratings ans build credibility.",
    },
];

function HowItWorks(){
    return(
        <section className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="mb-16 text-center text-5xl font-bold text-white">
                How It Works
            </h2>

            <div className="grid gap--8 md:grid-cols-2 cl:grid-cols-4">
                {steps.map((step)=>(
                    <div
                    key={step.id}
                    className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/15">
                        <h3 className="mb-4 text-2xl font-semibold text-white">
                            {step.title}
                        </h3>

                        <p claassName="leading-7 text-blue-100">
                            {step.description}
                        </p>
                        </div>
                ))}
            </div>
        </section>
    );
}
export default HowItWorks;