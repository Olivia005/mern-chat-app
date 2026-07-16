const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div style={{ display: 'flex', gap: '15px', marginTop: '4px', marginBottom: '4px' }}>
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          color: selectedGender === 'male' ? '#00e5ff' : 'rgba(255,255,180,0.42)',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.55px',
          transition: 'color 0.2s',
        }}
      >
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '4px',
          border: `1.5px solid ${selectedGender === 'male' ? '#00e5ff' : 'rgba(255,255,255,0.2)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: selectedGender === 'male' ? 'rgba(0,229,255,0.1)' : 'transparent',
          transition: 'all 0.2s'
        }}>
          {selectedGender === 'male' && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <input
          type='checkbox'
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
          style={{ display: 'none' }}
        />
        Male
      </label>

      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          color: selectedGender === 'female' ? '#00e5ff' : 'rgba(255,255,180,0.42)',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.55px',
          transition: 'color 0.2s',
        }}
      >
        <div style={{
          width: '16px',
          height: '16px',
          borderRadius: '4px',
          border: `1.5px solid ${selectedGender === 'female' ? '#00e5ff' : 'rgba(255,255,255,0.2)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: selectedGender === 'female' ? 'rgba(0,229,255,0.1)' : 'transparent',
          transition: 'all 0.2s'
        }}>
          {selectedGender === 'female' && (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <input
          type='checkbox'
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
          style={{ display: 'none' }}
        />
        Female
      </label>
    </div>
  );
};
export default GenderCheckbox;
