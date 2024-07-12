export type Booking = {
    id: string;
    user_id: string;
    availability_id: string;
    name: string;
    desc: string;
    availability_name: string;
    price: number;
    created_at: string;
    duration: number;
    updated_at: string;
    public: boolean;
};

export type UserWithBookings = {
    id: string;
    username: string;
    name: string;
    bio: string;
    photo_url: string;
    bookingTypes: Booking[];
};


