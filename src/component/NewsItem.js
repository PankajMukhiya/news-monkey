import React from 'react'

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, author, date, source, } = props
    return (
        <div className="my-2">
            <div className="card" >
                {/* <span className="badge rounded-pill bg-success" style={{left:'90%', zIndex:'1'}}>{source} </span> */}
                <div>
                    <span className="badge rounded-pill bg-success d-flex justify-content-end position-absolute end-0">{source} </span>
                </div>
                <img src={!imgUrl ? "https://images.livemint.com/img/2021/08/29/600x338/nps_tax-kaOC--621x414@LiveMint_1630231414077.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} target="/" className="btn btn-danger btn-sm">Read More</a>
                </div>
            </div>

        </div>
    )
}

export default NewsItem
