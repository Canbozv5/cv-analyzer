import React from 'react';

interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
    const getBadgeConfig = () => {
        if (score > 70) {
            return {
                label: 'Strong',
                containerClass: 'bg-green-100 border-green-200',
                textClass: 'text-green-600',
            };
        } else if (score > 49) {
            return {
                label: 'Good Start',
                containerClass: 'bg-yellow-100 border-yellow-200',
                textClass: 'text-yellow-600',
            };
        } else {
            return {
                label: 'Needs Work',
                containerClass: 'bg-red-100 border-red-200',
                textClass: 'text-red-600',
            };
        }
    };

    const { label, containerClass, textClass } = getBadgeConfig();

    return (
        <div
            className={`inline-flex items-center px-3 py-1 rounded-full border ${containerClass}`}
        >
            <p className={`text-sm font-semibold ${textClass}`}>{label}</p>
        </div>
    );
};

export default ScoreBadge;
