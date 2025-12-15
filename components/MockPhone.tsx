import React from 'react';
import { UserProfile } from '../types';
import { SleekDark } from './templates/SleekDark';
import { ModernGlass } from './templates/ModernGlass';
import { ProfessionalLight } from './templates/Professional';
import { MinimalistMono } from './templates/MinimalistMono';
import { NeonCyber } from './templates/NeonCyber';
import { NatureOrganic } from './templates/NatureOrganic';
import { BoldPop } from './templates/BoldPop';
import { SoftPastel } from './templates/SoftPastel';

interface MockPhoneProps {
  data: UserProfile;
}

export const MockPhone: React.FC<MockPhoneProps> = ({ data }) => {
  const renderTemplate = () => {
    switch (data.templateId) {
      case 'sleek-dark':
        return <SleekDark data={data} />;
      case 'modern-glass':
        return <ModernGlass data={data} />;
      case 'professional-light':
        return <ProfessionalLight data={data} />;
      case 'minimalist-mono':
        return <MinimalistMono data={data} />;
      case 'neon-cyber':
        return <NeonCyber data={data} />;
      case 'nature-organic':
        return <NatureOrganic data={data} />;
      case 'bold-pop':
        return <BoldPop data={data} />;
      case 'soft-pastel':
        return <SoftPastel data={data} />;
      default:
        return <SleekDark data={data} />;
    }
  };

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden">
      {/* Camera Notch/Island */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-b-xl z-50 flex items-center justify-center">
          <div className="w-16 h-1 bg-gray-800 rounded-full opacity-50"></div>
      </div>

      {/* Screen Content */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative z-0">
        {renderTemplate()}
      </div>
    </div>
  );
};