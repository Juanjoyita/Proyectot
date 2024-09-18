'use client';

import React, { useState, useCallback } from 'react';

interface Team {
  name: string;
}

interface Matchup {
  team1: string;
  team2: string;
}

const HomePage: React.FC = () => {
  const [teamName, setTeamName] = useState('');
  const [teams, setTeams] = useState<Team[]>([]);
  const [groups, setGroups] = useState<Team[][]>([]);
  const [matchups, setMatchups] = useState<{ [groupIndex: number]: Matchup[] }>({});

  const addTeam = useCallback(() => {
    if (teams.length >= 8) {
      alert('No puedes añadir más de 8 equipos.');
      return;
    }

    if (teamName.trim() && !teams.some(team => team.name === teamName.trim())) {
      setTeams(prevTeams => [...prevTeams, { name: teamName.trim() }]);
      setTeamName('');
    }
  }, [teamName, teams]);

  const generateGroups = useCallback(() => {
    if (teams.length === 0) {
      alert('No hay equipos para generar grupos. Por favor, añade equipos primero.');
      return;
    }

    const maxTeamsPerGroup = 4;
    const shuffledTeams = [...teams].sort(() => Math.random() - 0.5);
    const numGroups = Math.ceil(shuffledTeams.length / maxTeamsPerGroup);

    const newGroups: Team[][] = Array.from({ length: numGroups }, () => []);
    shuffledTeams.forEach((team, index) => {
      newGroups[Math.floor(index / maxTeamsPerGroup)].push(team);
    });

    setGroups(newGroups);
    setMatchups({});
  }, [teams]);

  const generateMatchups = useCallback(() => {
    const newMatchups: { [groupIndex: number]: Matchup[] } = {};

    groups.forEach((group, groupIndex) => {
      const groupMatchups: Matchup[] = [];
      const teamsInGroup = [...group];

      for (let i = 0; i < teamsInGroup.length; i += 2) {
        if (i + 1 < teamsInGroup.length) {
          groupMatchups.push({
            team1: teamsInGroup[i].name,
            team2: teamsInGroup[i + 1].name,
          });
        }
      }

      newMatchups[groupIndex] = groupMatchups;
    });

    setMatchups(newMatchups);
  }, [groups]);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4 text-center sm:text-3xl lg:text-4xl">Lightning Tournament</h1>

      {/* Sección para añadir equipos */}
      <div className="mb-4 flex flex-col items-center sm:flex-row sm:justify-center">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="border p-2 mb-2 sm:mb-0 sm:mr-2 rounded"
          placeholder="Team name"
          aria-label="Team name"
        />
        <button
          onClick={addTeam}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="Add Team"
        >
          Add Team
        </button>
      </div>

      {/* Botones para generar grupos y enfrentamientos */}
      <div className="mb-4 flex justify-center space-x-4">
        <button
          onClick={generateGroups}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-300"
          aria-label="Generate Groups"
        >
          Generate Groups
        </button>

        {groups.length > 0 && (
          <button
            onClick={generateMatchups}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-200"
            aria-label="Generate confrontations"
          >
            Generate confrontations
          </button>
        )}
      </div>

      {/* Sección de equipos */}
      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-center sm:text-2xl">Teams</h2>
        <ul className="list-disc pl-4 sm:pl-6">
          {teams.length > 0 ? (
            teams.map((team, index) => (
              <li key={index} className="bg-black text-white border p-2 mb-2 rounded text-lg">
                {team.name}
              </li>
            ))
          ) : (
            <li className="text-black">There are no teams</li>
          )}
        </ul>
      </section>

      {/* Sección de grupos */}
      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-center sm:text-2xl">Groups</h2>
        <ul className="list-disc pl-4 sm:pl-6">
          {groups.length > 0 ? (
            groups.map((group, groupIndex) => (
              <li key={groupIndex} className="bg-black text-white border p-2 mb-2 rounded">
                Group {groupIndex + 1}:
                <ul className="list-disc pl-4 sm:pl-6">
                  {group.map((team, teamIndex) => (
                    <li key={teamIndex} className="bg-black text-white border p-2 mb-2 rounded text-lg">
                      {team.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))
          ) : (
            <li className="text-black">There are no groups</li>
          )}
        </ul>
      </section>

      {/* Sección de enfrentamientos de grupo */}
      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2 text-center sm:text-2xl">Group Showdowns</h2>
        {Object.entries(matchups).map(([groupIndex, groupMatchups]) => (
          <div key={groupIndex} className="mb-4 flex justify-center">
            <div className="w-full max-w-4xl">
              <h3 className="text-lg font-bold mb-2 text-center sm:text-xl">
                Group {Number(groupIndex) + 1}
              </h3>
              <div className="border border-gray-300 rounded-lg shadow-lg">
                <div className="p-4">
                  {groupMatchups.length > 0 ? (
                    groupMatchups.map((matchup, matchupIndex) => (
                      <div
                        key={matchupIndex}
                        className="flex justify-center items-center py-2 border-b last:border-b-0"
                      >
                        <span className="text-xl font-semibold mx-4">{matchup.team1}</span>
                        <span className="text-xl font-semibold mx-4">vs</span>
                        <span className="text-xl font-semibold mx-4">{matchup.team2}</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-2">No matchups available</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
