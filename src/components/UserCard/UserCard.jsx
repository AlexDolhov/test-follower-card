import {
  HeroThumb,
  Logo,
  UserAvatar,
  AvatarThumb,
  UserInfo,
  Button,
  Tweets,
  Followers,
} from './UserCard.styled';

import { useEffect, useState } from 'react';

export const UserCard = ({ user: { id, user, tweets, followers, avatar } }) => {
  const [following, setFollowing] = useState(false);
  const [followersCount, setfollowersCount] = useState(followers);

  const [followedIds, setFollowedIds] = useState(() => {
    const storedIds = localStorage.getItem('followedIds');
    return storedIds ? JSON.parse(storedIds) : [];
  });

  const handleClick = id => {
    setFollowing(!following);

    if (following) {
      setFollowedIds(state => state.filter(value => value !== id));
      setfollowersCount(followers);
      return;
    }
    setfollowersCount(state => state + 1);
    setFollowedIds([...followedIds, id]);

    // if (followedIds.includes(id)) {
    //   setFollowing(false);
    //   setFollowedIds(followedIds.filter(followedId => followedId !== id));
    //   setfollowersCount(followers);
    //   return;
    // }
    // setFollowing(true);
    // setfollowersCount(state => state + 1);
    // setFollowedIds([...followedIds, id]);
  };

  const formatedFollowesNumber = followersCount.toLocaleString('en-US');

  useEffect(() => {
    localStorage.setItem('followedIds', JSON.stringify(followedIds));
  }, [followedIds]);

  return (
    <>
      <HeroThumb>
        <Logo />
      </HeroThumb>
      <UserInfo>
        <AvatarThumb>
          <UserAvatar
            src={avatar}
            alt={`${user} avatar`}
            width={64}
            height={64}
          />
        </AvatarThumb>

        <Tweets>{tweets} tweeets</Tweets>
        <Followers>{formatedFollowesNumber} followers</Followers>
        <Button onClick={() => handleClick(id)}>
          {following ? 'Following' : 'Follow'}
        </Button>
      </UserInfo>
    </>
  );
};
