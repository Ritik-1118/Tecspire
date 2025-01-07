import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
    return (
        <div className="min-h-screen bg-gradient-to-t from-[#0A0A0A] via-[#050603] to-[#09120E] text-white  flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Internship Page</h1>
        </div>
    )
}
