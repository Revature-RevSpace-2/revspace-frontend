
export class User {

    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    birthday:  number;
    revatureJoinDate: number;
    githubUsername: string;
    title: string;
    location: string;
    aboutMe: string;
    followers?: number[];
    following?: number[];

    constructor(userId: number,
        email: string,
        firstName: string,
        lastName: string,       
        githubUsername: string,
        title: string,
<<<<<<< HEAD
        location: string, 
        aboutMe: string,
        followers?: number[],
        following?: number[] )
=======
        location: string,
        aboutMe: string,
        birthday?: number,
        revatureJoinDate?: number)
>>>>>>> 9e00cdce2db29f0659e218455b13c3d09bef6451
        {
            this.userId = userId;
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthday = birthday;           
            this.githubUsername = githubUsername;
            this.title = title;
            this.location = location;
            this.aboutMe = aboutMe;
<<<<<<< HEAD
            this.followers = followers;
            this.following = following;
=======
            this.revatureJoinDate = revatureJoinDate;
>>>>>>> 9e00cdce2db29f0659e218455b13c3d09bef6451
    }

 


}