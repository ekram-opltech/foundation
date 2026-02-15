import Link from "next/link"

interface PageBannerProps {
    item: {
        title: string;
        backgroundImage: string;
        shapeImage: string;
        breadcrumbItems: { label: string; href: string }[];
    }
}
const PageBanner: React.FC<PageBannerProps> = ({ item }) => {

    return (
        <section className="breadcrumb-area">
            <div className="breadcrumb-area-bg" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
            </div>
            <div className="breadcrumb-area__shape1">
                <img src={item.shapeImage} alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="inner-content text-center">
                            <div className="title">
                                <h2>{item.title}</h2>
                            </div>
                            <div className="breadcrumb-menu">
                                <ul>
                                    {item.breadcrumbItems.map((breadcrumbItem, index) => (
                                        <li key={index} className={index === item.breadcrumbItems.length - 1 ? "active" : ""}>
                                            {index === item.breadcrumbItems.length - 1 ? breadcrumbItem.label :
                                                <Link href={breadcrumbItem.href}>{breadcrumbItem.label}</Link>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageBanner
