import { LightningElement, api } from 'lwc';
export default class MovieTile extends LightningElement {
    @api
    sushantMovies = [{
        moveiName: 'Dil Bechara',
        director: 'Mukesh Chhabra',
        stars: 'Sushant Singh Rajput, Sanjana Sanghi, Swastika Mukherjee',
        movieRating: '****',
        releaseDate: '24 July 2023',
        bannerImg: 'https://cdn.bollywoodmdb.com/largethumb,250x267',
        trailer: 'https://www.bollywood.com/movies/broadband/dil-bechara-official-trailer'
    },
    {
        moveiName: 'Dil Phir Haara',
        director: 'Mukesh Chhabra',
        stars: 'Sushant Singh Rajput, Sanjana Sanghi, Swastika Mukherjee',
        movieRating: '****',
        releaseDate: '24 July 2023',
        bannerImg: 'https://cdn.bollywoodmdb.com/largethumb,250x267',
        trailer: 'https://www.bollywood.com/movies/broadband/dil-bechara-official-trailer'
    },
    {
        moveiName: 'Dil Kismat Ka Maara',
        director: 'Mukesh Chhabra',
        stars: 'Sushant Singh Rajput, Sanjana Sanghi, Swastika Mukherjee',
        movieRating: '****',
        releaseDate: '24 July 2023',
        bannerImg: 'https://cdn.bollywoodmdb.com/largethumb,250x267',
        trailer: 'https://www.bollywood.com/movies/broadband/dil-bechara-official-trailer'
    }
    ]
}