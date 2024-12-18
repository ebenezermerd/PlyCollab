import React, { useState, useEffect } from 'react'

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TeamMembers: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/team')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        return response.json();
      })
      .then(data => {
        setTeam(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
        setError('Failed to load team data. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading team members...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="py-20 relative" id="team">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our <span className="text-neon-green">Team</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="p-6 rounded-lg glass hover:bg-neon-green/5 transition-colors text-center">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full mx-auto mb-4 w-48 h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMembers

