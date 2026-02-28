import DashboardSidebar from "./components/dashboard-sidebar";

export default function DashboardLayout({ children, }: { children: React.ReactNode; }) {

    return (
        <section className="cause-details dashboad_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="thm-sidebar-box">
                            <div className="single-sidebar-box">
                                <div className="sidebar-title">
                                    <h3>Dashboard</h3>
                                </div>
                                <DashboardSidebar />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}