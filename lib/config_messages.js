exports.getIpPort = {
  "contents":[
    { "type": "paragraph", "text":"Please enter the IP Address and Port of the LightSymphony iPort device"},
    { "type": "input_field_text", "field_name": "lll_ip_address", "value": "192.168.0.210", "label": "iPort IP Address", "placeholder": "192.168.0.210", "required": true},
    { "type": "input_field_text", "field_name": "lll_port", "value": "10001", "label": "iPort Port", "placeholder": "10001", "required": true},
    { "type": "submit", "name": "Save", "rpc_method": "store_ip_port" },
    { "type": "close", "text": "Cancel" }
  ]
};

exports.finish = {
  "finish": true
};

