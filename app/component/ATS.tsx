import React from 'react';

interface Suggestion {
    type: 'good' | 'improve';
    tip: string;
}

interface ATSProps {
    score: number;
    suggestions: Suggestion[];
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    const getScoreData = () => {
        if (score > 69) {
            return {
                bgGradient: 'from-green-100',
                icon: '/icons/ats-good.svg',
                status: 'Great Job!',
            };
        } else if (score > 49) {
            return {
                bgGradient: 'from-yellow-100',
                icon: '/icons/ats-warning.svg',
                status: 'Good Start',
            };
        } else {
            return {
                bgGradient: 'from-red-100',
                icon: '/icons/ats-bad.svg',
                status: 'Needs Improvement',
            };
        }
    };

    const { bgGradient, icon, status } = getScoreData();

    return (
        <div
            className={`max-w-md rounded-xl border border-gray-200 bg-gradient-to-br ${bgGradient} to-white p-6 shadow-sm`}
        >
            <div className="flex items-center gap-4 mb-6">
                <img src={icon} alt="ATS Icon" className="w-12 h-12" />
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        ATS Score – {score}/100
                    </h2>
                    <span className="text-sm font-medium text-gray-600">
                        {status}
                    </span>
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                        Analyze Result
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-1">
                        This score represents how well your resume is likely to
                        perform in Applicant Tracking System used by employers.
                    </p>
                </div>

                {/* Öneriler Listesi */}
                <ul className="space-y-3">
                    {suggestions.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <img
                                src={
                                    item.type === 'good'
                                        ? '/icons/check.svg'
                                        : '/icons/warning.svg'
                                }
                                alt="Status"
                                className="w-5 h-5 mt-0.5"
                            />
                            <span className="text-sm text-gray-700">
                                {item.tip}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Kapanış Satırı */}
                <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-blue-600 italic">
                        Keep refining your resume to improve your chances of
                        getting past ATS filters and into the hands of
                        recruiters.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ATS;
