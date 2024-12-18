import React from 'react';
import TeamMembers from '@/components/sections/TeamMembers';
import teamData from '../../datas/team.json';

const Team: React.FC = () => {
  return <TeamMembers data={teamData} />;
};

export default Team;

