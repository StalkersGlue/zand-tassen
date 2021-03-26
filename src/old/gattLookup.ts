const services = new Map();
const characteristics = new Map();
const descriptors = new Map();

services.set("00001800-0000-1000-8000-00805f9b34fb", "Generic Access");
services.set("00001801-0000-1000-8000-00805f9b34fb", "Generic Attribute");
services.set("00001802-0000-1000-8000-00805f9b34fb", "Immediate Alert");
services.set("00001803-0000-1000-8000-00805f9b34fb", "Link Loss");
services.set("00001804-0000-1000-8000-00805f9b34fb", "Tx Power");
services.set("00001805-0000-1000-8000-00805f9b34fb", "Current Time Service");
services.set(
  "00001806-0000-1000-8000-00805f9b34fb",
  "Reference Time Update Service"
);
services.set("00001807-0000-1000-8000-00805f9b34fb", "Next DST Change Service");
services.set("00001808-0000-1000-8000-00805f9b34fb", "Glucose");
services.set("00001809-0000-1000-8000-00805f9b34fb", "Health Thermometer");
services.set("0000180a-0000-1000-8000-00805f9b34fb", "Device Information");
services.set("0000180d-0000-1000-8000-00805f9b34fb", "Heart Rate");
services.set(
  "0000180e-0000-1000-8000-00805f9b34fb",
  "Phone Alert Status Service"
);
services.set("0000180f-0000-1000-8000-00805f9b34fb", "Battery Service");
services.set("00001810-0000-1000-8000-00805f9b34fb", "Blood Pressure");
services.set(
  "00001811-0000-1000-8000-00805f9b34fb",
  "Alert Notification Service"
);
services.set("00001812-0000-1000-8000-00805f9b34fb", "Human Interface Device");
services.set("00001813-0000-1000-8000-00805f9b34fb", "Scan Parameters");
services.set(
  "00001814-0000-1000-8000-00805f9b34fb",
  "Running Speed and Cadence"
);
services.set("00001815-0000-1000-8000-00805f9b34fb", "Automation IO");
services.set(
  "00001816-0000-1000-8000-00805f9b34fb",
  "Cycling Speed and Cadence"
);
services.set("00001818-0000-1000-8000-00805f9b34fb", "Cycling Power");
services.set("00001819-0000-1000-8000-00805f9b34fb", "Location and Navigation");
services.set("0000181a-0000-1000-8000-00805f9b34fb", "Environmental Sensing");
services.set("0000181b-0000-1000-8000-00805f9b34fb", "Body Composition");
services.set("0000181c-0000-1000-8000-00805f9b34fb", "User Data");
services.set("0000181d-0000-1000-8000-00805f9b34fb", "Weight Scale");
services.set("0000181e-0000-1000-8000-00805f9b34fb", "Bond Management Service");
services.set(
  "0000181f-0000-1000-8000-00805f9b34fb",
  "Continuous Glucose Monitoring"
);
services.set(
  "00001820-0000-1000-8000-00805f9b34fb",
  "Internet Protocol Support Service"
);
services.set("00001821-0000-1000-8000-00805f9b34fb", "Indoor Positioning");
services.set("00001822-0000-1000-8000-00805f9b34fb", "Pulse Oximeter Service");
services.set("00001823-0000-1000-8000-00805f9b34fb", "HTTP Proxy");
services.set("00001824-0000-1000-8000-00805f9b34fb", "Transport Discovery");
services.set("00001825-0000-1000-8000-00805f9b34fb", "Object Transfer Service");
services.set("00001826-0000-1000-8000-00805f9b34fb", "Fitness Machine");
services.set(
  "00001827-0000-1000-8000-00805f9b34fb",
  "Mesh Provisioning Service"
);
services.set("00001828-0000-1000-8000-00805f9b34fb", "Mesh Proxy Service");
services.set(
  "00001829-0000-1000-8000-00805f9b34fb",
  "Reconnection Configuration"
);

characteristics.set("00002a00-0000-1000-8000-00805f9b34fb", "Device Name");
characteristics.set("00002a01-0000-1000-8000-00805f9b34fb", "Appearance");
characteristics.set(
  "00002a02-0000-1000-8000-00805f9b34fb",
  "Peripheral Privacy Flag"
);
characteristics.set(
  "00002a03-0000-1000-8000-00805f9b34fb",
  "Reconnection Address"
);
characteristics.set(
  "00002a04-0000-1000-8000-00805f9b34fb",
  "Peripheral Preferred Connection Parameters"
);
characteristics.set("00002a05-0000-1000-8000-00805f9b34fb", "Service Changed");
characteristics.set("00002a06-0000-1000-8000-00805f9b34fb", "Alert Level");
characteristics.set("00002a07-0000-1000-8000-00805f9b34fb", "Tx Power Level");
characteristics.set("00002a08-0000-1000-8000-00805f9b34fb", "Date Time");
characteristics.set("00002a09-0000-1000-8000-00805f9b34fb", "Day of Week");
characteristics.set("00002a0a-0000-1000-8000-00805f9b34fb", "Day Date Time");
characteristics.set("00002a0b-0000-1000-8000-00805f9b34fb", "Exact Time 100");
characteristics.set("00002a0c-0000-1000-8000-00805f9b34fb", "Exact Time 256");
characteristics.set("00002a0d-0000-1000-8000-00805f9b34fb", "DST Offset");
characteristics.set("00002a0e-0000-1000-8000-00805f9b34fb", "Time Zone");
characteristics.set(
  "00002a0f-0000-1000-8000-00805f9b34fb",
  "Local Time Information"
);
characteristics.set(
  "00002a10-0000-1000-8000-00805f9b34fb",
  "Secondary Time Zone"
);
characteristics.set("00002a11-0000-1000-8000-00805f9b34fb", "Time with DST");
characteristics.set("00002a12-0000-1000-8000-00805f9b34fb", "Time Accuracy");
characteristics.set("00002a13-0000-1000-8000-00805f9b34fb", "Time Source");
characteristics.set(
  "00002a14-0000-1000-8000-00805f9b34fb",
  "Reference Time Information"
);
characteristics.set("00002a15-0000-1000-8000-00805f9b34fb", "Time Broadcast");
characteristics.set(
  "00002a16-0000-1000-8000-00805f9b34fb",
  "Time Update Control Point"
);
characteristics.set(
  "00002a17-0000-1000-8000-00805f9b34fb",
  "Time Update State"
);
characteristics.set(
  "00002a18-0000-1000-8000-00805f9b34fb",
  "Glucose Measurement"
);
characteristics.set("00002a19-0000-1000-8000-00805f9b34fb", "Battery Level");
characteristics.set(
  "00002a1a-0000-1000-8000-00805f9b34fb",
  "Battery Power State"
);
characteristics.set(
  "00002a1b-0000-1000-8000-00805f9b34fb",
  "Battery Level State"
);
characteristics.set(
  "00002a1c-0000-1000-8000-00805f9b34fb",
  "Temperature Measurement"
);
characteristics.set("00002a1d-0000-1000-8000-00805f9b34fb", "Temperature Type");
characteristics.set(
  "00002a1e-0000-1000-8000-00805f9b34fb",
  "Intermediate Temperature"
);
characteristics.set(
  "00002a1f-0000-1000-8000-00805f9b34fb",
  "Temperature Celsius"
);
characteristics.set(
  "00002a20-0000-1000-8000-00805f9b34fb",
  "Temperature Fahrenheit"
);
characteristics.set(
  "00002a21-0000-1000-8000-00805f9b34fb",
  "Measurement Interval"
);
characteristics.set(
  "00002a22-0000-1000-8000-00805f9b34fb",
  "Boot Keyboard Inset Report"
);
characteristics.set("00002a23-0000-1000-8000-00805f9b34fb", "System ID");
characteristics.set(
  "00002a24-0000-1000-8000-00805f9b34fb",
  "Model Number String"
);
characteristics.set(
  "00002a25-0000-1000-8000-00805f9b34fb",
  "Serial Number String"
);
characteristics.set(
  "00002a26-0000-1000-8000-00805f9b34fb",
  "Firmware Revision String"
);
characteristics.set(
  "00002a27-0000-1000-8000-00805f9b34fb",
  "Hardware Revision String"
);
characteristics.set(
  "00002a28-0000-1000-8000-00805f9b34fb",
  "Software Revision String"
);
characteristics.set(
  "00002a29-0000-1000-8000-00805f9b34fb",
  "Manufacturer Name String"
);
characteristics.set(
  "00002a2a-0000-1000-8000-00805f9b34fb",
  "IEEE 11073-20601 Regulatory Certification Data List"
);
characteristics.set("00002a2b-0000-1000-8000-00805f9b34fb", "Current Time");
characteristics.set(
  "00002a2c-0000-1000-8000-00805f9b34fb",
  "Magnetic Declination"
);
characteristics.set("00002a2f-0000-1000-8000-00805f9b34fb", "Position 2D");
characteristics.set("00002a30-0000-1000-8000-00805f9b34fb", "Position 3D");
characteristics.set("00002a31-0000-1000-8000-00805f9b34fb", "Scan Refresh");
characteristics.set(
  "00002a32-0000-1000-8000-00805f9b34fb",
  "Boot Keyboard Outset Report"
);
characteristics.set(
  "00002a33-0000-1000-8000-00805f9b34fb",
  "Boot Mouse Inset Report"
);
characteristics.set(
  "00002a34-0000-1000-8000-00805f9b34fb",
  "Glucose Measurement Context"
);
characteristics.set(
  "00002a35-0000-1000-8000-00805f9b34fb",
  "Blood Pressure Measurement"
);
characteristics.set(
  "00002a36-0000-1000-8000-00805f9b34fb",
  "Intermediate Cuff Pressure"
);
characteristics.set(
  "00002a37-0000-1000-8000-00805f9b34fb",
  "Heart Rate Measurement"
);
characteristics.set(
  "00002a38-0000-1000-8000-00805f9b34fb",
  "Body Sensor Location"
);
characteristics.set(
  "00002a39-0000-1000-8000-00805f9b34fb",
  "Heart Rate Control Point"
);
characteristics.set("00002a3a-0000-1000-8000-00805f9b34fb", "Removable");
characteristics.set("00002a3b-0000-1000-8000-00805f9b34fb", "Service Required");
characteristics.set(
  "00002a3c-0000-1000-8000-00805f9b34fb",
  "Scientific Temperature Celsius"
);
characteristics.set("00002a3d-0000-1000-8000-00805f9b34fb", "String");
characteristics.set(
  "00002a3e-0000-1000-8000-00805f9b34fb",
  "Network Availability"
);
characteristics.set("00002a3f-0000-1000-8000-00805f9b34fb", "Alert Status");
characteristics.set(
  "00002a40-0000-1000-8000-00805f9b34fb",
  "Ringer Control point"
);
characteristics.set("00002a41-0000-1000-8000-00805f9b34fb", "Ringer Setting");
characteristics.set(
  "00002a42-0000-1000-8000-00805f9b34fb",
  "Alert Category ID Bit Mask"
);
characteristics.set(
  "00002a43-0000-1000-8000-00805f9b34fb",
  "Alert Category ID"
);
characteristics.set(
  "00002a44-0000-1000-8000-00805f9b34fb",
  "Alert Notification Control Point"
);
characteristics.set(
  "00002a45-0000-1000-8000-00805f9b34fb",
  "Unread Alert Status"
);
characteristics.set("00002a46-0000-1000-8000-00805f9b34fb", "New Alert");
characteristics.set(
  "00002a47-0000-1000-8000-00805f9b34fb",
  "Supported New Alert Category"
);
characteristics.set(
  "00002a48-0000-1000-8000-00805f9b34fb",
  "Supported Unread Alert Category"
);
characteristics.set(
  "00002a49-0000-1000-8000-00805f9b34fb",
  "Blood Pressure Feature"
);
characteristics.set("00002a4a-0000-1000-8000-00805f9b34fb", "HID Information");
characteristics.set("00002a4b-0000-1000-8000-00805f9b34fb", "Report Map");
characteristics.set(
  "00002a4c-0000-1000-8000-00805f9b34fb",
  "HID Control Point"
);
characteristics.set("00002a4d-0000-1000-8000-00805f9b34fb", "Report");
characteristics.set("00002a4e-0000-1000-8000-00805f9b34fb", "Protocol Mode");
characteristics.set(
  "00002a4f-0000-1000-8000-00805f9b34fb",
  "Scan Interval Window"
);
characteristics.set("00002a50-0000-1000-8000-00805f9b34fb", "PnP ID");
characteristics.set("00002a51-0000-1000-8000-00805f9b34fb", "Glucose Feature");
characteristics.set(
  "00002a52-0000-1000-8000-00805f9b34fb",
  "Record Access Control Point"
);
characteristics.set("00002a53-0000-1000-8000-00805f9b34fb", "RSC Measurement");
characteristics.set("00002a54-0000-1000-8000-00805f9b34fb", "RSC Feature");
characteristics.set("00002a55-0000-1000-8000-00805f9b34fb", "SC Control Point");
characteristics.set("00002a56-0000-1000-8000-00805f9b34fb", "Digital");
characteristics.set("00002a57-0000-1000-8000-00805f9b34fb", "Digital Outset");
characteristics.set("00002a58-0000-1000-8000-00805f9b34fb", "Analog");
characteristics.set("00002a59-0000-1000-8000-00805f9b34fb", "Analog Outset");
characteristics.set("00002a5a-0000-1000-8000-00805f9b34fb", "Aggregate");
characteristics.set("00002a5b-0000-1000-8000-00805f9b34fb", "CSC Measurement");
characteristics.set("00002a5c-0000-1000-8000-00805f9b34fb", "CSC Feature");
characteristics.set("00002a5d-0000-1000-8000-00805f9b34fb", "Sensor Location");
characteristics.set(
  "00002a5e-0000-1000-8000-00805f9b34fb",
  "PLX Spot-Check Measurement"
);
characteristics.set(
  "00002a5f-0000-1000-8000-00805f9b34fb",
  "PLX Continuous Measurement Characteristic"
);
characteristics.set("00002a60-0000-1000-8000-00805f9b34fb", "PLX Features");
characteristics.set(
  "00002a62-0000-1000-8000-00805f9b34fb",
  "Pulse Oximetry Control Point"
);
characteristics.set(
  "00002a63-0000-1000-8000-00805f9b34fb",
  "Cycling Power Measurement"
);
characteristics.set(
  "00002a64-0000-1000-8000-00805f9b34fb",
  "Cycling Power Vector"
);
characteristics.set(
  "00002a65-0000-1000-8000-00805f9b34fb",
  "Cycling Power Feature"
);
characteristics.set(
  "00002a66-0000-1000-8000-00805f9b34fb",
  "Cycling Power Control Point"
);
characteristics.set(
  "00002a67-0000-1000-8000-00805f9b34fb",
  "Location and Speed Characteristic"
);
characteristics.set("00002a68-0000-1000-8000-00805f9b34fb", "Navigation");
characteristics.set("00002a69-0000-1000-8000-00805f9b34fb", "Position Quality");
characteristics.set("00002a6a-0000-1000-8000-00805f9b34fb", "LN Feature");
characteristics.set("00002a6b-0000-1000-8000-00805f9b34fb", "LN Control Point");
characteristics.set("00002a6c-0000-1000-8000-00805f9b34fb", "Elevation");
characteristics.set("00002a6d-0000-1000-8000-00805f9b34fb", "Pressure");
characteristics.set("00002a6e-0000-1000-8000-00805f9b34fb", "Temperature");
characteristics.set("00002a6f-0000-1000-8000-00805f9b34fb", "Humidity");
characteristics.set("00002a70-0000-1000-8000-00805f9b34fb", "True Wind Speed");
characteristics.set(
  "00002a71-0000-1000-8000-00805f9b34fb",
  "True Wind Direction"
);
characteristics.set(
  "00002a72-0000-1000-8000-00805f9b34fb",
  "Apparent Wind Speed"
);
characteristics.set(
  "00002a73-0000-1000-8000-00805f9b34fb",
  "Apparent Wind Direction"
);
characteristics.set("00002a74-0000-1000-8000-00805f9b34fb", "Gust Factor");
characteristics.set(
  "00002a75-0000-1000-8000-00805f9b34fb",
  "Pollen Concentration"
);
characteristics.set("00002a76-0000-1000-8000-00805f9b34fb", "UV Index");
characteristics.set("00002a77-0000-1000-8000-00805f9b34fb", "Irradiance");
characteristics.set("00002a78-0000-1000-8000-00805f9b34fb", "Rainfall");
characteristics.set("00002a79-0000-1000-8000-00805f9b34fb", "Wind Chill");
characteristics.set("00002a7a-0000-1000-8000-00805f9b34fb", "Heat Index");
characteristics.set("00002a7b-0000-1000-8000-00805f9b34fb", "Dew Point");
characteristics.set(
  "00002a7d-0000-1000-8000-00805f9b34fb",
  "Descriptor Value Changed"
);
characteristics.set(
  "00002a7e-0000-1000-8000-00805f9b34fb",
  "Aerobic Heart Rate Lower Limit"
);
characteristics.set(
  "00002a7f-0000-1000-8000-00805f9b34fb",
  "Aerobic Threshold"
);
characteristics.set("00002a80-0000-1000-8000-00805f9b34fb", "Age");
characteristics.set(
  "00002a81-0000-1000-8000-00805f9b34fb",
  "Anaerobic Heart Rate Lower Limit"
);
characteristics.set(
  "00002a82-0000-1000-8000-00805f9b34fb",
  "Anaerobic Heart Rate Upper Limit"
);
characteristics.set(
  "00002a83-0000-1000-8000-00805f9b34fb",
  "Anaerobic Threshold"
);
characteristics.set(
  "00002a84-0000-1000-8000-00805f9b34fb",
  "Aerobic Heart Rate Upper Limit"
);
characteristics.set("00002a85-0000-1000-8000-00805f9b34fb", "Date of Birth");
characteristics.set(
  "00002a86-0000-1000-8000-00805f9b34fb",
  "Date of Threshold Assessment"
);
characteristics.set("00002a87-0000-1000-8000-00805f9b34fb", "Email Address");
characteristics.set(
  "00002a88-0000-1000-8000-00805f9b34fb",
  "Fat Burn Heart Rate Lower Limit"
);
characteristics.set(
  "00002a89-0000-1000-8000-00805f9b34fb",
  "Fat Burn Heart Rate Upper Limit"
);
characteristics.set("00002a8a-0000-1000-8000-00805f9b34fb", "First Name");
characteristics.set(
  "00002a8b-0000-1000-8000-00805f9b34fb",
  "Five Zone Heart Rate Limits"
);
characteristics.set("00002a8c-0000-1000-8000-00805f9b34fb", "Gender");
characteristics.set("00002a8d-0000-1000-8000-00805f9b34fb", "Heart Rate Max");
characteristics.set("00002a8e-0000-1000-8000-00805f9b34fb", "Height");
characteristics.set(
  "00002a8f-0000-1000-8000-00805f9b34fb",
  "Hip Circumference"
);
characteristics.set("00002a90-0000-1000-8000-00805f9b34fb", "Last Name");
characteristics.set(
  "00002a91-0000-1000-8000-00805f9b34fb",
  "Maximum Recommended Heart Rate"
);
characteristics.set(
  "00002a92-0000-1000-8000-00805f9b34fb",
  "Resting Heart Rate"
);
characteristics.set(
  "00002a93-0000-1000-8000-00805f9b34fb",
  "Sport Type for Aerobic and Anaerobic Thresholds"
);
characteristics.set(
  "00002a94-0000-1000-8000-00805f9b34fb",
  "Three Zone Heart Rate Limits"
);
characteristics.set(
  "00002a95-0000-1000-8000-00805f9b34fb",
  "Two Zone Heart Rate Limit"
);
characteristics.set("00002a96-0000-1000-8000-00805f9b34fb", "VO2 Max");
characteristics.set(
  "00002a97-0000-1000-8000-00805f9b34fb",
  "Waist Circumference"
);
characteristics.set("00002a98-0000-1000-8000-00805f9b34fb", "Weight");
characteristics.set(
  "00002a99-0000-1000-8000-00805f9b34fb",
  "Database Change Increment"
);
characteristics.set("00002a9a-0000-1000-8000-00805f9b34fb", "User Index");
characteristics.set(
  "00002a9b-0000-1000-8000-00805f9b34fb",
  "Body Composition Feature"
);
characteristics.set(
  "00002a9c-0000-1000-8000-00805f9b34fb",
  "Body Composition Measurement"
);
characteristics.set(
  "00002a9d-0000-1000-8000-00805f9b34fb",
  "Weight Measurement"
);
characteristics.set(
  "00002a9e-0000-1000-8000-00805f9b34fb",
  "Weight Scale Feature"
);
characteristics.set(
  "00002a9f-0000-1000-8000-00805f9b34fb",
  "User Control Point"
);
characteristics.set(
  "00002aa0-0000-1000-8000-00805f9b34fb",
  "Magnetic Flux Density - 2D"
);
characteristics.set(
  "00002aa1-0000-1000-8000-00805f9b34fb",
  "Magnetic Flux Density - 3D"
);
characteristics.set("00002aa2-0000-1000-8000-00805f9b34fb", "Language");
characteristics.set(
  "00002aa3-0000-1000-8000-00805f9b34fb",
  "Barometric Pressure Trend"
);
characteristics.set(
  "00002aa4-0000-1000-8000-00805f9b34fb",
  "Bond Management Control Point"
);
characteristics.set(
  "00002aa5-0000-1000-8000-00805f9b34fb",
  "Bond Management Features"
);
characteristics.set(
  "00002aa6-0000-1000-8000-00805f9b34fb",
  "Central Address Resolution"
);
characteristics.set("00002aa7-0000-1000-8000-00805f9b34fb", "CGM Measurement");
characteristics.set("00002aa8-0000-1000-8000-00805f9b34fb", "CGM Feature");
characteristics.set("00002aa9-0000-1000-8000-00805f9b34fb", "CGM Status");
characteristics.set(
  "00002aaa-0000-1000-8000-00805f9b34fb",
  "CGM Session Start Time"
);
characteristics.set(
  "00002aab-0000-1000-8000-00805f9b34fb",
  "CGM Session Run Time"
);
characteristics.set(
  "00002aac-0000-1000-8000-00805f9b34fb",
  "CGM Specific Ops Control Point"
);
characteristics.set(
  "00002aad-0000-1000-8000-00805f9b34fb",
  "Indoor Positioning Configuration"
);
characteristics.set("00002aae-0000-1000-8000-00805f9b34fb", "Latitude");
characteristics.set("00002aaf-0000-1000-8000-00805f9b34fb", "Longitude");
characteristics.set(
  "00002ab0-0000-1000-8000-00805f9b34fb",
  "Local North Coordinate"
);
characteristics.set(
  "00002ab1-0000-1000-8000-00805f9b34fb",
  "Local East Coordinate"
);
characteristics.set("00002ab2-0000-1000-8000-00805f9b34fb", "Floor Number");
characteristics.set("00002ab3-0000-1000-8000-00805f9b34fb", "Altitude");
characteristics.set("00002ab4-0000-1000-8000-00805f9b34fb", "Uncertainty");
characteristics.set("00002ab5-0000-1000-8000-00805f9b34fb", "Location Name");
characteristics.set("00002ab6-0000-1000-8000-00805f9b34fb", "URI");
characteristics.set("00002ab7-0000-1000-8000-00805f9b34fb", "HTTP Headers");
characteristics.set("00002ab8-0000-1000-8000-00805f9b34fb", "HTTP Status Code");
characteristics.set("00002ab9-0000-1000-8000-00805f9b34fb", "HTTP Entity Body");
characteristics.set(
  "00002aba-0000-1000-8000-00805f9b34fb",
  "HTTP Control Point"
);
characteristics.set("00002abb-0000-1000-8000-00805f9b34fb", "HTTPS Security");
characteristics.set(
  "00002abc-0000-1000-8000-00805f9b34fb",
  "TDS Control Point"
);
characteristics.set("00002abd-0000-1000-8000-00805f9b34fb", "OTS Feature");
characteristics.set("00002abe-0000-1000-8000-00805f9b34fb", "Object Name");
characteristics.set("00002abf-0000-1000-8000-00805f9b34fb", "Object Type");
characteristics.set("00002ac0-0000-1000-8000-00805f9b34fb", "Object Size");
characteristics.set(
  "00002ac1-0000-1000-8000-00805f9b34fb",
  "Object First-Created"
);
characteristics.set(
  "00002ac2-0000-1000-8000-00805f9b34fb",
  "Object Last-Modified"
);
characteristics.set("00002ac3-0000-1000-8000-00805f9b34fb", "Object ID");
characteristics.set(
  "00002ac4-0000-1000-8000-00805f9b34fb",
  "Object Properties"
);
characteristics.set(
  "00002ac5-0000-1000-8000-00805f9b34fb",
  "Object Action Control Point"
);
characteristics.set(
  "00002ac6-0000-1000-8000-00805f9b34fb",
  "Object List Control Point"
);
characteristics.set(
  "00002ac7-0000-1000-8000-00805f9b34fb",
  "Object List Filter"
);
characteristics.set("00002ac8-0000-1000-8000-00805f9b34fb", "Object Changed");
characteristics.set(
  "00002ac9-0000-1000-8000-00805f9b34fb",
  "Resolvable Private Address Only"
);
characteristics.set(
  "00002acc-0000-1000-8000-00805f9b34fb",
  "Fitness Machine Feature"
);
characteristics.set("00002acd-0000-1000-8000-00805f9b34fb", "Treadmill Data");
characteristics.set(
  "00002ace-0000-1000-8000-00805f9b34fb",
  "Cross Trainer Data"
);
characteristics.set(
  "00002acf-0000-1000-8000-00805f9b34fb",
  "Step Climber Data"
);
characteristics.set(
  "00002ad0-0000-1000-8000-00805f9b34fb",
  "Stair Climber Data"
);
characteristics.set("00002ad1-0000-1000-8000-00805f9b34fb", "Rower Data");
characteristics.set("00002ad2-0000-1000-8000-00805f9b34fb", "Indoor Bike Data");
characteristics.set("00002ad3-0000-1000-8000-00805f9b34fb", "Training Status");
characteristics.set(
  "00002ad4-0000-1000-8000-00805f9b34fb",
  "Supported Speed Range"
);
characteristics.set(
  "00002ad5-0000-1000-8000-00805f9b34fb",
  "Supported Inclination Range"
);
characteristics.set(
  "00002ad6-0000-1000-8000-00805f9b34fb",
  "Supported Resistance Level Range"
);
characteristics.set(
  "00002ad7-0000-1000-8000-00805f9b34fb",
  "Supported Heart Rate Range"
);
characteristics.set(
  "00002ad8-0000-1000-8000-00805f9b34fb",
  "Supported Power Range"
);
characteristics.set(
  "00002ad9-0000-1000-8000-00805f9b34fb",
  "Fitness Machine Control Point"
);
characteristics.set(
  "00002ada-0000-1000-8000-00805f9b34fb",
  "Fitness Machine Status"
);
characteristics.set("00002aed-0000-1000-8000-00805f9b34fb", "Date UTC");
characteristics.set("00002b1d-0000-1000-8000-00805f9b34fb", "RC Feature");
characteristics.set("00002b1e-0000-1000-8000-00805f9b34fb", "RC Settings");
characteristics.set(
  "00002b1f-0000-1000-8000-00805f9b34fb",
  "Reconnection Configuration Control Point"
);

descriptors.set(
  "00002900-0000-1000-8000-00805f9b34fb",
  "Characteristic Extended Properties"
);
descriptors.set(
  "00002901-0000-1000-8000-00805f9b34fb",
  "Characteristic User Description"
);
descriptors.set(
  "00002902-0000-1000-8000-00805f9b34fb",
  "Client Characteristic Configuration"
);
descriptors.set(
  "00002903-0000-1000-8000-00805f9b34fb",
  "Server Characteristic Configuration"
);
descriptors.set(
  "00002904-0000-1000-8000-00805f9b34fb",
  "Characteristic Presentation Format"
);
descriptors.set(
  "00002905-0000-1000-8000-00805f9b34fb",
  "Characteristic Aggregate Format"
);
descriptors.set("00002906-0000-1000-8000-00805f9b34fb", "Valid Range");
descriptors.set(
  "00002907-0000-1000-8000-00805f9b34fb",
  "External Report Reference"
);
descriptors.set("00002908-0000-1000-8000-00805f9b34fb", "Report Reference");
descriptors.set("00002909-0000-1000-8000-00805f9b34fb", "Number of Digitals");
descriptors.set(
  "0000290a-0000-1000-8000-00805f9b34fb",
  "Value Trigger Setting"
);
descriptors.set(
  "0000290b-0000-1000-8000-00805f9b34fb",
  "Environmental Sensing Configuration"
);
descriptors.set(
  "0000290c-0000-1000-8000-00805f9b34fb",
  "Environmental Sensing Measurement"
);
descriptors.set(
  "0000290d-0000-1000-8000-00805f9b34fb",
  "Environmental Sensing Trigger Setting"
);
descriptors.set("0000290e-0000-1000-8000-00805f9b34fb", "Time Trigger Setting");

export { services, characteristics, descriptors };
