import { useState } from "react";
import { Input, Button, Table, Spin, Alert } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import Lottie from "react-lottie";
import animationData from "./assets/Animation - 1739784311411.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchTerm2, setSearchTerm2] = useState(""); // New search term state for second search
  const [result2, setResult2] = useState([]); // New result state for second search
  const [loading2, setLoading2] = useState(false); // Loading state for second search
  const [error2, setError2] = useState(null); // Error state for second search

  const [searchTerm3, setSearchTerm3] = useState(""); // New search term state for second search
  const [result3, setResult3] = useState([]); // New result state for second search
  const [loading3, setLoading3] = useState(false); // Loading state for second search
  const [error3, setError3] = useState(null); // Error state for second search

  const [searchTerm4, setSearchTerm4] = useState(""); // New search term state for second search
  const [result4, setResult4] = useState([]); // New result state for second search
  const [loading4, setLoading4] = useState(false); // Loading state for second search
  const [error4, setError4] = useState(null); // Error state for second search

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Please enter a valid L2_category_id");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://new-folder-5-six.vercel.app/api/category/search?L2_category_id=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("No matching data found.");
      }

      const data = await response.json();
      setResult([data]); // Convert object to array for Ant Design Table
    } catch (err) {
      setError(err.message);
      setResult([]);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch3 = async () => {
    if (!searchTerm3.trim()) {
      setError3("Please enter a valid L2_category");
      return;
    }

    setLoading3(true);
    setError3(null);

    try {
      const response = await fetch(
        `https://new-folder-5-six.vercel.app/api/category/search-category?l2_category=${searchTerm3}`
      );

      if (!response.ok) {
        throw new Error("No matching data found.");
      }

      const data = await response.json();
      setResult3(data); // Use the data directly without wrapping in an array
      console.log(data); // Check the API response
    } catch (err) {
      setError3(err.message);
      setResult3([]);
    } finally {
      setLoading3(false);
    }
  };

  const handleSearch4 = async () => {
    if (!searchTerm4.trim()) {
      setError4("Please enter a valid L2_category_id");
      return;
    }

    setLoading4(true);
    setError4(null);

    try {
      const response = await fetch(
        `https://new-folder-5-six.vercel.app/api/category/search-attributes?AttributeID=${searchTerm4}`
      );

      if (!response.ok) {
        throw new Error("No matching data found.");
      }

      const data = await response.json();
      setResult4([data]); // Convert object to array for Ant Design Table
    } catch (err) {
      setError4(err.message);
      setResult4([]);
    } finally {
      setLoading4(false);
    }
  };

  const handleSearch2 = async () => {
    if (!searchTerm2.trim()) {
      setError2("Please enter a valid L2_category");
      return;
    }

    setLoading2(true);
    setError2(null);

    try {
      const response = await fetch(
        `https://new-folder-5-six.vercel.app/api/category/search-all?L2_category=${searchTerm2}`
      );

      if (!response.ok) {
        throw new Error("No matching data found.");
      }

      const data = await response.json();

      setResult2([data]); // Convert object to array for Ant Design Table
    } catch (err) {
      setError2(err.message);
      setResult2([]);
    } finally {
      setLoading2(false);
    }
  };

  const columns2 = [
    {
      title: "L0 Category",
      dataIndex: "L0_category",
      key: "L0_category",
    },
    {
      title: "L1 Category",
      dataIndex: "L1_category",
      key: "L1_category",
    },
    {
      title: "L2 Category",
      dataIndex: "L2_category",
      key: "L2_category",
    },
    {
      title: "L2 Category ID",
      dataIndex: "L2_category_id",
      key: "L2_category_id",
    },
  ];
  const columns3 = [
    {
      title: "L0 Category",
      dataIndex: "l0_category",
      key: "l0_category",
    },
    {
      title: "L1 Category",
      dataIndex: "l1_category",
      key: "l1_category",
    },
    {
      title: "L2 Category",
      dataIndex: "l2_category",
      key: "l2_category",
    },
    {
      title: "L2 Category ID",
      dataIndex: "l2_category_id",
      key: "l2_category_id",
    },
  ];

  const columns4 = [
    {
      title: "L2",
      dataIndex: "L2",
      key: "L2",
    },
    {
      title: "AttributeID",
      dataIndex: "AttributeID",
      key: "AttributeID",
    },
    {
      title: "AttributeName",
      dataIndex: "AttributeName",
      key: "AttributeName",
    },
    {
      title: "Source",
      dataIndex: "Source",
      key: "Source",
    },
  ];

  const columns = [
    {
      title: "L0 Category",
      dataIndex: "L0_category",
      key: "L0_category",
    },
    {
      title: "L1 Category",
      dataIndex: "L1_category",
      key: "L1_category",
    },
    {
      title: "L2 Category",
      dataIndex: "L2_category",
      key: "L2_category",
    },
    {
      title: "L2 Category ID",
      dataIndex: "L2_category_id",
      key: "L2_category_id",
    },
    {
      title: "PDP1",
      dataIndex: "PDP1",
      key: "PDP1",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP2",
      dataIndex: "PDP2",
      key: "PDP2",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP3",
      dataIndex: "PDP3",
      key: "PDP3",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP4",
      dataIndex: "PDP4",
      key: "PDP4",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP5",
      dataIndex: "PDP5",
      key: "PDP5",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP6",
      dataIndex: "PDP6",
      key: "PDP6",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP7",
      dataIndex: "PDP7",
      key: "PDP7",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP8",
      dataIndex: "PDP8",
      key: "PDP8",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP9",
      dataIndex: "PDP9",
      key: "PDP9",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP10",
      dataIndex: "PDP10",
      key: "PDP10",
      render: (text) => text || "N/A",
    },
    {
      title: "PDP11",
      dataIndex: "PDP11",
      key: "PDP11",
      render: (text) => text || "N/A",
    },
    {
      title: "PLP1",
      dataIndex: "PDP1",
      key: "PDP1",
      render: (text) => text || "N/A",
    },
    {
      title: "PLP2",
      dataIndex: "PLP2",
      key: "PLP2",
      render: (text) => text || "N/A",
    },
    {
      title: "PLP3",
      dataIndex: "PLP3",
      key: "PLP3",
      render: (text) => text || "N/A",
    },
    {
      title: "PLP4",
      dataIndex: "PLP4",
      key: "PLP4",
      render: (text) => text || "N/A",
    },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation plays automatically
    animationData: animationData, // The Lottie animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Lottie Animation */}
      <div className="w-full max-w-md mb-4">
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>

      <h1 className="text-3xl font-bold text-blue-600 mb-6">Search Category</h1>

      {/* First Search Bar */}
      <div className="w-full max-w-md mb-4">
        <Input.Search
          placeholder="Enter Pdp and plp"
          enterButton="Search"
          size="large"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      {loading && <Spin size="large" className="mt-4" />}
      {error && (
        <Alert message={error} type="error" showIcon className="mt-4" />
      )}
      {result.length > 0 && (
        <div className="mt-6 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          <Table
            columns={columns}
            dataSource={result}
            rowKey="L2_category_id"
          />
        </div>
      )}

      {/* Second Search Bar */}

      <div className="w-full max-w-md mb-4">
        <Input.Search
          placeholder="Enter L2_category text"
          enterButton="Search"
          size="large"
          value={searchTerm3}
          onChange={(e) => setSearchTerm3(e.target.value)}
          onSearch={handleSearch3}
        />
      </div>

      {loading3 && <Spin size="large" className="mt-4" />}
      {error3 && (
        <Alert message={error3} type="error" showIcon className="mt-4" />
      )}
      {result3.length > 0 && (
        <div className="mt-6 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          <Table
            columns={columns3}
            dataSource={result3}
            rowKey="L2_category_id"
          />
        </div>
      )}
      <div className="w-full max-w-md mb-4">
        <Input.Search
          placeholder="Search Attribute"
          enterButton="Search"
          size="large"
          value={searchTerm4}
          onChange={(e) => setSearchTerm4(e.target.value)}
          onSearch={handleSearch4}
        />
      </div>

      {loading4 && <Spin size="large" className="mt-4" />}
      {error4 && (
        <Alert message={error4} type="error" showIcon className="mt-4" />
      )}
      {result4.length > 0 && (
        <div className="mt-6 w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          <Table
            columns={columns4}
            dataSource={result4}
            rowKey="L2_category_id"
          />
        </div>
      )}
    </div>
  );
}

export default App;
