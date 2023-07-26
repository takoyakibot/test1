import React, { useState } from 'react';

const QuizEditor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [fusenCoordinates, setFusenCoordinates] = useState([]);
  const [isAnswerVisible, setIsAnswerVisible] = useState(true);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFusenCoordinate = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    setFusenCoordinates([...fusenCoordinates, { x, y }]);
  };

  const handleAnswerVisibilityChange = (event) => {
    setIsAnswerVisible(event.target.checked);
  };

  const saveQuiz = () => {
    // ダミーのクイズデータを保存する処理（バックエンドの代わりに使用）
    console.log('クイズを保存しました:', selectedImage, fusenCoordinates, isAnswerVisible);
  };

  return (
    <div>
      <h2>クイズを作成する</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h3>画像のクイズ</h3>
          <div style={{ position: 'relative' }}>
            <img
              src={selectedImage}
              alt="クイズ対象の画像"
              style={{ maxWidth: '300px' }}
              onClick={handleFusenCoordinate}
            />
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
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
          <div>
            <label>
              正解の部分を隠す:
              <input
                type="checkbox"
                checked={isAnswerVisible}
                onChange={handleAnswerVisibilityChange}
              />
            </label>
          </div>
          <button onClick={saveQuiz}>クイズを保存する</button>
        </div>
      )}
    </div>
  );
};

export default QuizEditor;
