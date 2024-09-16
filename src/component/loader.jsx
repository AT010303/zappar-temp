const Loader = () => {
    return (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          {/* Independent spinner */}
          <div
            style={{
              border: "8px solid #f3f3f3", // Light grey background for spinner
              borderRadius: "50%",
              borderTop: "8px solid #00FF00", // Green top to animate
              width: "50px",
              height: "50px",
              animation: "spin 1s linear infinite", // Rotation animation
            }}
          />
          <div style={{ color: "white", fontSize: "12px", marginTop: "15px" }}>
            Loading...
          </div>
        </div>
    )
}

export default Loader;