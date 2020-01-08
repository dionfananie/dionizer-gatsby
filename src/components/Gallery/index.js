import React, { useEffect, useCallback, useState } from 'react';
import { imageWrapper, imageItem, imgBox } from '@components/Gallery/styles';
import unsplash from '@plugins/unsplash';

const ImagesSection = () => {
  const [imgData, setImgData] = useState();

  const fetchImage = useCallback(async () => {
    try {
      const resp = await unsplash.search.photos('team', 0, 15, { orientation: 'landscape' });
      const data = await resp.json();
      setImgData(data?.results);
    } catch (error) {
      console.error();
    }
  }, []);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  if (imgData) {
    return (
      <div className={imageWrapper}>
        {imgData.map(item => {
          const { id, urls, alt_description, links } = item || {};
          return (
            <div key={id} className={imageItem}>
              <a href={links?.html} target="_blank" rel="noopener noreferrer">
                <img className={imgBox} src={urls?.small} alt={alt_description} loading="lazy" />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>asasas</div>;
};

export default ImagesSection;
