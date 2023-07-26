import React, { useState } from 'react';

const Quiz = ({ imageUrl, fusenCoordinates, isAnswerVisible }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div>
      <h2>クイズ</h2>
      <div style={{ position: 'relative' }}>
        <img src={imageUrl} alt="クイズ対象の画像" style={{ maxWidth: '300px' }} />
        {fusenCoordinates.map((coord, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: coord.x,
              top: coord.y,
              width: '30px',
              height: '30px',
              backgroundColor: 'red',
              opacity: isAnswerVisible ? 0.5 : 1,
            }}
          />
        ))}
      </div>
      {isAnswerVisible ? (
        <div>
          <p>正解: 見えている</p>
        </div>
      ) : (
        <div>
          <p>正解は「YES」か「NO」を選択してください:</p>
          <label>
            見えている
            <input type="radio" value="YES" checked={selectedAnswer === 'YES'} onChange={handleAnswerChange} />
          </label>
          <label>
            見えていない
            <input type="radio" value="NO" checked={selectedAnswer === 'NO'} onChange={handleAnswerChange} />
          </label>
        </div>
      )}
    </div>
  );
};

export default Quiz;
