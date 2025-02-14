import { useVampire } from '../VampireContext';

const VampireProgress = () => {
    const { vampire } = useVampire();

    return (
        <div className="fixed right-0 top-0 h-screen w-64 p-4 bg-gray-100 shadow-lg overflow-y-auto">
            <h1 className="text-lg font-bold mb-2">Vampire Progress</h1>
            <p><strong>Name:</strong> {vampire.name || "Not entered yet"}</p>
            <p><strong>Origin:</strong> {vampire.memories[0].experiences[0] || "Not entered yet"}</p>

            <h2 className="font-bold mt-3">Side Characters</h2>
            <ul>
                {vampire.sideCharacters.map((sc, index) => (
                    <li key={index}>{sc || `Side Character ${index + 1} not entered yet`}</li>
                ))}
            </ul>

            <h2 className="font-bold mt-3">Skills</h2>
            <ul>
                {vampire.skills.map((skill, index) => (
                    <li key={index}>{skill || `Skill ${index + 1} not entered yet`}</li>
                ))}
            </ul>

            <h2 className="font-bold mt-3">Resources</h2>
            <ul>
                {vampire.resources.map((resource, index) => (
                    <li key={index}>{resource || `Resource ${index + 1} not entered yet`}</li>
                ))}
            </ul>

            <h2 className="font-bold mt-3">Memories</h2>
            {vampire.memories.map((memory, index) => (
                <div key={index}>
                    <p className="font-semibold">Memory {index + 1}</p>
                    <ul>
                        {memory.experiences.map((exp, expIndex) => (
                            <li key={expIndex}>{exp || `Experience ${expIndex + 1} not entered yet`}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <h2 className="font-bold mt-3">Conversion</h2>
            <p><strong>Immortal:</strong> {vampire.conversion?.[0]?.immortal || "Not entered yet"}</p>
            <p><strong>Mark:</strong> {vampire.conversion?.[0]?.mark || "Not entered yet"}</p>
        </div>
    )
}

export default VampireProgress;