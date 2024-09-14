import React from 'react'
const Dashboard = () => {
    return (
        <div>
            <main data-v-c9bd1de2="" id="main" className="main">
                <div data-v-c9bd1de2="" className="pagetitle">
                    <h1 data-v-c9bd1de2="">Meetings</h1>
                    <nav data-v-c9bd1de2="">
                        <ol data-v-c9bd1de2="" className="breadcrumb">
                            <li data-v-c9bd1de2="" className="breadcrumb-item">
                                <a data-v-c9bd1de2="" href="">
                                    Home
                                </a>
                            </li>
                            <li data-v-c9bd1de2="" className="breadcrumb-item">
                                Meetings
                            </li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Title */}
                <section data-v-c9bd1de2="" className="section">
                    <div data-v-c9bd1de2="" className="row">
                        <div data-v-c9bd1de2="" className="col-lg-12">
                            <div data-v-c9bd1de2="" className="card">
                                <div data-v-c9bd1de2="" className="card-body">
                                    <div data-v-c9bd1de2="" className="col-12">
                                        <h5 data-v-c9bd1de2="" className="card-title" />
                                        <div data-v-c9bd1de2="" className="container mt-4">
                                            <div data-v-c9bd1de2="" className="row">
                                                <div data-v-c9bd1de2="" className="col-md-6">
                                                    <h2 data-v-c9bd1de2="">Schedule New Meeting</h2>
                                                    <form data-v-c9bd1de2="" className="mb-3">
                                                        <div data-v-c9bd1de2="" className="row">
                                                            <div data-v-c9bd1de2="" className="col-md-8">
                                                                <div data-v-c9bd1de2="" className="mb-3">
                                                                    <label
                                                                        data-v-c9bd1de2=""
                                                                        htmlFor="email"
                                                                        className="form-label"
                                                                    >
                                                                        Email:
                                                                    </label>
                                                                    <input
                                                                        data-v-c9bd1de2=""
                                                                        type="email"
                                                                        id="email"
                                                                        className="form-control"
                                                                        required=""
                                                                    />
                                                                </div>
                                                                <div data-v-c9bd1de2="" className="mb-3">
                                                                    <label
                                                                        data-v-c9bd1de2=""
                                                                        htmlFor="date_time"
                                                                        className="form-label"
                                                                    >
                                                                        Date and Time:
                                                                    </label>
                                                                    <input
                                                                        data-v-c9bd1de2=""
                                                                        type="datetime-local"
                                                                        id="date_time"
                                                                        className="form-control"
                                                                        required=""
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button
                                                            data-v-c9bd1de2=""
                                                            type="submit"
                                                            className="btn btn-primary"
                                                        >
                                                            Create Meeting {/*v-if*/}
                                                        </button>
                                                    </form>
                                                </div>
                                                <div data-v-c9bd1de2="" className="col-md-6">
                                                    <h2 data-v-c9bd1de2="">Scheduled Meetings</h2>
                                                    <table data-v-c9bd1de2="" className="table">
                                                        <thead data-v-c9bd1de2="">
                                                            <tr data-v-c9bd1de2="">
                                                                <th data-v-c9bd1de2="" scope="col">
                                                                    Created by
                                                                </th>
                                                                <th data-v-c9bd1de2="" scope="col">
                                                                    Date
                                                                </th>
                                                                <th data-v-c9bd1de2="" scope="col">
                                                                    Status
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody data-v-c9bd1de2="">
                                                            <tr data-v-c9bd1de2="">
                                                                <td data-v-c9bd1de2="">Hiring Manager</td>
                                                                <td data-v-c9bd1de2="">11/09/24</td>
                                                                <td data-v-c9bd1de2="">completed</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Dashboard
