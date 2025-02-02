import { useState } from 'react';
import { Box, Paper, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function AIChat() {
  const [messages, setMessages] = useState([
    { type: 'ai', content: '你好！我是AI助手，有什么可以帮你的吗？' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, {
      type: 'user',
      content: input
    }]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      {/* 左侧历史记录 */}
      <Paper sx={{ width: 240, borderRight: 1, borderColor: 'divider', display: { xs: 'none', sm: 'block' } }}>
        <Box p={2}>
          历史记录
        </Box>
      </Paper>

      {/* 主对话区域 */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* 消息列表 */}
        <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
          {messages.map((msg, index) => (
            <Box 
              key={index} 
              className={`message-bubble ${msg.type === 'user' ? 'user-message' : 'ai-message'}`}
            >
              {msg.content}
            </Box>
          ))}
        </Box>

        {/* 输入框 */}
        <Paper sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="输入消息..."
              variant="outlined"
              multiline
              maxRows={4}
            />
            <IconButton 
              onClick={handleSend} 
              color="primary"
              sx={{ alignSelf: 'flex-end' }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default AIChat; 