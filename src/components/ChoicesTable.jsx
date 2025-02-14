const ChoicesTable = ({ confidantChoices, rank }) => {
    const data = confidantChoices[rank];
  
    if (!data) {
      return null;
    }

    const { points, choices } = data;
  
    return (
      <div>
        {choices.map((group, groupIndex) => (
          <table key={groupIndex} style={{ marginBottom: '20px', borderCollapse: 'collapse', width: '100%', backgroundColor: '#000000' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '1.2em', fontWeight: 'bold', border: '3px solid white', padding: '8px' }}>Choice</th>
                <th style={{ fontSize: '1.2em', fontWeight: 'bold', border: '3px solid white', padding: '8px' }}>Effect</th>
              </tr>
            </thead>
            <tbody>
              {group.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td style={{ fontSize: '1.2em', fontWeight: 'bold', border: '3px solid white', padding: '8px' }}>{row[0]}</td>
                  <td style={{ fontSize: '1.2em', fontWeight: 'bold', border: '3px solid white', padding: '8px' }}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    );
  };
  
  export default ChoicesTable;