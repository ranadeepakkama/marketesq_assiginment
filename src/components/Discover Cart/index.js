import './index.css'

const DiscoverCart = () => {
    const userReview = () => (
        <div className='userdetails-conatiner'>
            <div className="user-img-conatiner d-flex justify-content-start align-items-center">
                <img className="user-img" src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt='user-img'/>
                <div className='mt-4'>
                    <h2 style={{fontSize:'16px',lineHeight:'0px'}}>Arjun Raghav</h2>
                    <img style={{height: '47px', width:'60px', lineHeight:'0px'}} src="https://png.pngtree.com/png-vector/20220721/ourmid/pngtree-four-star-rating-sign-png-image_6026608.png" alt='rating'/>
                </div>
            </div>
            <p className="prg">I am writing this after reflecting on my one
                month stay with Bricabin in Ladakh. Right
                from picking us up at the airport to dropping
                us back there after a month, Urgan was very
                responsible and took good care of my friends
                and me. <span>read more</span>
            </p>
        </div>
    )
    return(
        <div className="discover-cart-container">
            <h1 className="text-center">Discover</h1>
            <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex flex-column align-items-center' style={{height:'75vh'}}>
                    {userReview()}
                </div>
                <div>
                    <img className='lake-img' style={{borderRadius: "6px"}} src='https://gostops.com/blog/wp-content/uploads/2021/07/prabhav-kashyap-godavarthy-XTroPPNq6JA-unsplash-683x1024.jpg' alt='lake-img'/>
                    {userReview()}
                </div>
                <div style={{height:'70vh', marginBottom: '-30px'}} className='d-flex flex-column justify-content-around align-items-center'>
                    <>{userReview()}</>
                    <>{userReview()}</>
                </div>
            </div>
        </div>
    )
} 

export default  DiscoverCart