import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer E-O6XQDdtb5MhhTZCl5Cgfg41QHxg6RnBErKGqx3iPhik1NjjwjWoqdSVJ5CZ7Gf-XCZJmghFhLD_C76QZdN-c9C8o4IGaOYbUlgysVN0hzQbhR5uUPI7zFX46izXnYx',
  },
});
