import React from "react";

export default function Breadcrumb({ title, page }) {
    return (
        <div className="breadcrumb-section">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href={page === 'About Us' ? '#' : '#'}>{page}</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {title}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}