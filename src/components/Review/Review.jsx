import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { reviewsRequest } from '../../services/API';
import { ReviewsInfoList } from './Review.styled';
import Loader from '../Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    (async function reviewsInfo() {
      const res = await reviewsRequest(movieId);
      setReviewsInfo(res.data.results);
      setIsLoading(false);
    })();

    return () => {};
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <ReviewsInfoList>
          {reviewsInfo.map(({ id, author, content }) => (
            <li key={id}>
              <p>
                <b>Author: </b>
                {author}
              </p>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsInfoList>
      )}
      {!isLoading && reviewsInfo.length === 0 && (
        <div>
          No information for this movie{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
            style={{ transform: 'scale(0.75)' }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15s1.5-2 4-2 4 2 4 2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </div>
      )}
    </>
  );
};

export default Reviews;
