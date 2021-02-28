import React, { useState, useEffect, FormEvent } from 'react';

import github from '../../services/api/github';

import CardBio from '../../components/CardBio';

import logoImg from '../../assets/logo.svg';
import withoutContentImg from '../../assets/without-content.svg';

import CardStar, { IStarProps } from '../../components/CardStar';

import {
  Logo,
  Form,
  Error,
  Sections,
  Section,
  WithoutContentImg,
} from './styles';
import { useToast } from '../../hooks/Toast';

interface IUser {
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  user_stars: number;
  location: string;
  html_url: string;
  login: string;
}

type IStar = IStarProps & { id: number };

const Home: React.FC = () => {
  const { addToast } = useToast();

  const [newUser, setNewUser] = useState('');
  const [inputError, setInputError] = useState('');

  const [user, setUser] = useState<IUser>(() => {
    const storagedUser = localStorage.getItem('@GitHubFinder:user');

    if (storagedUser) {
      return JSON.parse(storagedUser);
    }

    return {} as IUser;
  });
  const [stars, setStars] = useState<IStar[]>(() => {
    const storagedStars = localStorage.getItem('@GitHubFinder:user-stars');

    if (storagedStars) {
      return JSON.parse(storagedStars);
    }

    return [] as IStarProps[];
  });

  useEffect(() => {
    addToast({
      title: 'Olá, seja bem vindo(a)!',
      type: 'info',
    });
  }, [addToast]);

  useEffect(() => {
    localStorage.setItem('@GitHubFinder:user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('@GitHubFinder:user-stars', JSON.stringify(stars));
  }, [stars]);

  async function handleFindUser(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!newUser) {
      setInputError('Field required *');
      addToast({
        title: 'This field is required',
        type: 'error',
      });
      return;
    }

    addToast({
      title: 'Loading user...',
      type: 'info',
    });

    try {
      const { data: userReturned } = await github.get<
        Omit<IUser, 'user_stars'>
      >(`/${newUser}`);

      if (userReturned.login) {
        const { data: starsReturned } = await github.get<IStar[]>(
          `${userReturned.login}/starred`,
        );

        if (starsReturned) {
          setStars(starsReturned);
        }

        setUser({
          ...userReturned,
          user_stars: starsReturned.length,
          location: userReturned.location || 'Brazil',
        });

        addToast({
          title: `User ${userReturned.login} found successfully!`,
          type: 'success',
        });
      } else {
        addToast({
          title: `User ${newUser} not found!`,
          description:
            'The specified user was not found, check the information sent',
          type: 'info',
        });
      }

      setNewUser('');
      setInputError('');
    } catch (err) {
      addToast({
        title: 'Error fetching user!',
        description: `There was an error fetching the user ${newUser}, try again!`,
        type: 'error',
      });
    }
  }

  return (
    <>
      <Logo src={logoImg} alt="Logo" />

      <Form hasError={!!inputError} onSubmit={handleFindUser}>
        <input
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Type user nickname here"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Sections hasContent={!!user.login} style={{ minWidth: '100%' }}>
        {user.login ? (
          <>
            <Section width={100} minWidth={500} hasContent={!!user.login}>
              <CardBio
                image={user.avatar_url}
                name={user.name}
                bio={user.bio}
                amount_repositories={user.public_repos}
                amount_followers={user.followers}
                amount_following={user.following}
                amount_stars={user.user_stars}
                location={user.location}
                html_url={user.html_url}
                login={user.login}
              />
            </Section>

            {stars[0]?.id && (
              <Section width={100} hasContent={!!user.login}>
                {stars.map(
                  ({
                    id,
                    name,
                    avatar_url,
                    description,
                    forks_count,
                    stargazers_count,
                  }) => (
                    <CardStar
                      key={id}
                      id={id}
                      user={user.login}
                      name={name}
                      avatar_url={avatar_url}
                      description={description}
                      forks_count={forks_count}
                      stargazers_count={stargazers_count}
                    />
                  ),
                )}
              </Section>
            )}
          </>
        ) : (
          <Section width={100} hasContent={!!user.name}>
            <WithoutContentImg src={withoutContentImg} />
          </Section>
        )}
      </Sections>
    </>
  );
};

export default Home;
