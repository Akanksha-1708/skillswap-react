const skills=["Programming","Music","Design","Languages","Finance","Photography","Marketing","UI/UX",];

function PopularSkills(){
    return(
        <section className="mx-auto max-w-7xl px-6 py-24">
            <h2 className="mb-16 text-center text-5xl font-bold text-white">
                Popular Skill Categories
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((skill,index)=>(
                    <div key={index}
                    className="cursor-pointer rounded-2xl border-white/10 bg-white/10 p-8 text-center text-xl font-medium text-white backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-blue-500 hover:shadow-2xl">
                        {skill}
                    </div>
                )
                )}
            </div>
        </section>
    )
}
export default PopularSkills;