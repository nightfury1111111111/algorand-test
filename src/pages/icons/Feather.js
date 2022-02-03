import React from "react";
import { Helmet } from "react-helmet-async";
import { Card, Col, Container, Row } from "react-bootstrap";

import * as Icon from "react-feather";

const icons = [
  {
    icon: <Icon.Activity />,
    name: "Activity",
  },
  {
    icon: <Icon.Airplay />,
    name: "Airplay",
  },
  {
    icon: <Icon.AlertCircle />,
    name: "AlertCircle",
  },
  {
    icon: <Icon.AlertOctagon />,
    name: "AlertOctagon",
  },
  {
    icon: <Icon.AlertTriangle />,
    name: "AlertTriangle",
  },
  {
    icon: <Icon.AlignCenter />,
    name: "AlignCenter",
  },
  {
    icon: <Icon.AlignJustify />,
    name: "AlignJustify",
  },
  {
    icon: <Icon.AlignLeft />,
    name: "AlignLeft",
  },
  {
    icon: <Icon.AlignRight />,
    name: "AlignRight",
  },
  {
    icon: <Icon.Anchor />,
    name: "Anchor",
  },
  {
    icon: <Icon.Aperture />,
    name: "Aperture",
  },
  {
    icon: <Icon.Archive />,
    name: "Archive",
  },
  {
    icon: <Icon.ArrowDownCircle />,
    name: "ArrowDownCircle",
  },
  {
    icon: <Icon.ArrowDownLeft />,
    name: "ArrowDownLeft",
  },
  {
    icon: <Icon.ArrowDownRight />,
    name: "ArrowDownRight",
  },
  {
    icon: <Icon.ArrowDown />,
    name: "ArrowDown",
  },
  {
    icon: <Icon.ArrowLeftCircle />,
    name: "ArrowLeftCircle",
  },
  {
    icon: <Icon.ArrowLeft />,
    name: "ArrowLeft",
  },
  {
    icon: <Icon.ArrowRightCircle />,
    name: "ArrowRightCircle",
  },
  {
    icon: <Icon.ArrowRight />,
    name: "ArrowRight",
  },
  {
    icon: <Icon.ArrowUpCircle />,
    name: "ArrowUpCircle",
  },
  {
    icon: <Icon.ArrowUpLeft />,
    name: "ArrowUpLeft",
  },
  {
    icon: <Icon.ArrowUpRight />,
    name: "ArrowUpRight",
  },
  {
    icon: <Icon.ArrowUp />,
    name: "ArrowUp",
  },
  {
    icon: <Icon.AtSign />,
    name: "AtSign",
  },
  {
    icon: <Icon.Award />,
    name: "Award",
  },
  {
    icon: <Icon.BarChart2 />,
    name: "BarChart2",
  },
  {
    icon: <Icon.BarChart />,
    name: "BarChart",
  },
  {
    icon: <Icon.BatteryCharging />,
    name: "BatteryCharging",
  },
  {
    icon: <Icon.Battery />,
    name: "Battery",
  },
  {
    icon: <Icon.BellOff />,
    name: "BellOff",
  },
  {
    icon: <Icon.Bell />,
    name: "Bell",
  },
  {
    icon: <Icon.Bluetooth />,
    name: "Bluetooth",
  },
  {
    icon: <Icon.Bold />,
    name: "Bold",
  },
  {
    icon: <Icon.BookOpen />,
    name: "BookOpen",
  },
  {
    icon: <Icon.Book />,
    name: "Book",
  },
  {
    icon: <Icon.Bookmark />,
    name: "Bookmark",
  },
  {
    icon: <Icon.Box />,
    name: "Box",
  },
  {
    icon: <Icon.Briefcase />,
    name: "Briefcase",
  },
  {
    icon: <Icon.Calendar />,
    name: "Calendar",
  },
  {
    icon: <Icon.CameraOff />,
    name: "CameraOff",
  },
  {
    icon: <Icon.Camera />,
    name: "Camera",
  },
  {
    icon: <Icon.Cast />,
    name: "Cast",
  },
  {
    icon: <Icon.CheckCircle />,
    name: "CheckCircle",
  },
  {
    icon: <Icon.CheckSquare />,
    name: "CheckSquare",
  },
  {
    icon: <Icon.Check />,
    name: "Check",
  },
  {
    icon: <Icon.ChevronDown />,
    name: "ChevronDown",
  },
  {
    icon: <Icon.ChevronLeft />,
    name: "ChevronLeft",
  },
  {
    icon: <Icon.ChevronRight />,
    name: "ChevronRight",
  },
  {
    icon: <Icon.ChevronUp />,
    name: "ChevronUp",
  },
  {
    icon: <Icon.ChevronsDown />,
    name: "ChevronsDown",
  },
  {
    icon: <Icon.ChevronsLeft />,
    name: "ChevronsLeft",
  },
  {
    icon: <Icon.ChevronsRight />,
    name: "ChevronsRight",
  },
  {
    icon: <Icon.ChevronsUp />,
    name: "ChevronsUp",
  },
  {
    icon: <Icon.Chrome />,
    name: "Chrome",
  },
  {
    icon: <Icon.Circle />,
    name: "Circle",
  },
  {
    icon: <Icon.Clipboard />,
    name: "Clipboard",
  },
  {
    icon: <Icon.Clock />,
    name: "Clock",
  },
  {
    icon: <Icon.CloudDrizzle />,
    name: "CloudDrizzle",
  },
  {
    icon: <Icon.CloudLightning />,
    name: "CloudLightning",
  },
  {
    icon: <Icon.CloudOff />,
    name: "CloudOff",
  },
  {
    icon: <Icon.CloudRain />,
    name: "CloudRain",
  },
  {
    icon: <Icon.CloudSnow />,
    name: "CloudSnow",
  },
  {
    icon: <Icon.Cloud />,
    name: "Cloud",
  },
  {
    icon: <Icon.Code />,
    name: "Code",
  },
  {
    icon: <Icon.Codepen />,
    name: "Codepen",
  },
  {
    icon: <Icon.Coffee />,
    name: "Coffee",
  },
  {
    icon: <Icon.Command />,
    name: "Command",
  },
  {
    icon: <Icon.Compass />,
    name: "Compass",
  },
  {
    icon: <Icon.Copy />,
    name: "Copy",
  },
  {
    icon: <Icon.CornerDownLeft />,
    name: "CornerDownLeft",
  },
  {
    icon: <Icon.CornerDownRight />,
    name: "CornerDownRight",
  },
  {
    icon: <Icon.CornerLeftDown />,
    name: "CornerLeftDown",
  },
  {
    icon: <Icon.CornerLeftUp />,
    name: "CornerLeftUp",
  },
  {
    icon: <Icon.CornerRightDown />,
    name: "CornerRightDown",
  },
  {
    icon: <Icon.CornerRightUp />,
    name: "CornerRightUp",
  },
  {
    icon: <Icon.CornerUpLeft />,
    name: "CornerUpLeft",
  },
  {
    icon: <Icon.CornerUpRight />,
    name: "CornerUpRight",
  },
  {
    icon: <Icon.Cpu />,
    name: "Cpu",
  },
  {
    icon: <Icon.CreditCard />,
    name: "CreditCard",
  },
  {
    icon: <Icon.Crop />,
    name: "Crop",
  },
  {
    icon: <Icon.Crosshair />,
    name: "Crosshair",
  },
  {
    icon: <Icon.Database />,
    name: "Database",
  },
  {
    icon: <Icon.Delete />,
    name: "Delete",
  },
  {
    icon: <Icon.Disc />,
    name: "Disc",
  },
  {
    icon: <Icon.DollarSign />,
    name: "DollarSign",
  },
  {
    icon: <Icon.DownloadCloud />,
    name: "DownloadCloud",
  },
  {
    icon: <Icon.Download />,
    name: "Download",
  },
  {
    icon: <Icon.Droplet />,
    name: "Droplet",
  },
  {
    icon: <Icon.Edit2 />,
    name: "Edit2",
  },
  {
    icon: <Icon.Edit3 />,
    name: "Edit3",
  },
  {
    icon: <Icon.Edit />,
    name: "Edit",
  },
  {
    icon: <Icon.ExternalLink />,
    name: "ExternalLink",
  },
  {
    icon: <Icon.EyeOff />,
    name: "EyeOff",
  },
  {
    icon: <Icon.Eye />,
    name: "Eye",
  },
  {
    icon: <Icon.Facebook />,
    name: "Facebook",
  },
  {
    icon: <Icon.FastForward />,
    name: "FastForward",
  },
  {
    icon: <Icon.Feather />,
    name: "Feather",
  },
  {
    icon: <Icon.FileMinus />,
    name: "FileMinus",
  },
  {
    icon: <Icon.FilePlus />,
    name: "FilePlus",
  },
  {
    icon: <Icon.FileText />,
    name: "FileText",
  },
  {
    icon: <Icon.File />,
    name: "File",
  },
  {
    icon: <Icon.Film />,
    name: "Film",
  },
  {
    icon: <Icon.Filter />,
    name: "Filter",
  },
  {
    icon: <Icon.Flag />,
    name: "Flag",
  },
  {
    icon: <Icon.FolderMinus />,
    name: "FolderMinus",
  },
  {
    icon: <Icon.FolderPlus />,
    name: "FolderPlus",
  },
  {
    icon: <Icon.Folder />,
    name: "Folder",
  },
  {
    icon: <Icon.Frown />,
    name: "Frown",
  },
  {
    icon: <Icon.Gift />,
    name: "Gift",
  },
  {
    icon: <Icon.GitBranch />,
    name: "GitBranch",
  },
  {
    icon: <Icon.GitCommit />,
    name: "GitCommit",
  },
  {
    icon: <Icon.GitMerge />,
    name: "GitMerge",
  },
  {
    icon: <Icon.GitPullRequest />,
    name: "GitPullRequest",
  },
  {
    icon: <Icon.GitHub />,
    name: "GitHub",
  },
  {
    icon: <Icon.Gitlab />,
    name: "Gitlab",
  },
  {
    icon: <Icon.Globe />,
    name: "Globe",
  },
  {
    icon: <Icon.Grid />,
    name: "Grid",
  },
  {
    icon: <Icon.HardDrive />,
    name: "HardDrive",
  },
  {
    icon: <Icon.Hash />,
    name: "Hash",
  },
  {
    icon: <Icon.Headphones />,
    name: "Headphones",
  },
  {
    icon: <Icon.Heart />,
    name: "Heart",
  },
  {
    icon: <Icon.HelpCircle />,
    name: "HelpCircle",
  },
  {
    icon: <Icon.Home />,
    name: "Home",
  },
  {
    icon: <Icon.Image />,
    name: "Image",
  },
  {
    icon: <Icon.Inbox />,
    name: "Inbox",
  },
  {
    icon: <Icon.Info />,
    name: "Info",
  },
  {
    icon: <Icon.Instagram />,
    name: "Instagram",
  },
  {
    icon: <Icon.Italic />,
    name: "Italic",
  },
  {
    icon: <Icon.Key />,
    name: "Key",
  },
  {
    icon: <Icon.Layers />,
    name: "Layers",
  },
  {
    icon: <Icon.Layout />,
    name: "Layout",
  },
  {
    icon: <Icon.LifeBuoy />,
    name: "LifeBuoy",
  },
  {
    icon: <Icon.Link2 />,
    name: "Link2",
  },
  {
    icon: <Icon.Link />,
    name: "Link",
  },
  {
    icon: <Icon.Linkedin />,
    name: "Linkedin",
  },
  {
    icon: <Icon.List />,
    name: "List",
  },
  {
    icon: <Icon.Loader />,
    name: "Loader",
  },
  {
    icon: <Icon.Lock />,
    name: "Lock",
  },
  {
    icon: <Icon.LogIn />,
    name: "LogIn",
  },
  {
    icon: <Icon.LogOut />,
    name: "LogOut",
  },
  {
    icon: <Icon.Mail />,
    name: "Mail",
  },
  {
    icon: <Icon.MapPin />,
    name: "MapPin",
  },
  {
    icon: <Icon.Map />,
    name: "Map",
  },
  {
    icon: <Icon.Maximize2 />,
    name: "Maximize2",
  },
  {
    icon: <Icon.Maximize />,
    name: "Maximize",
  },
  {
    icon: <Icon.Meh />,
    name: "Meh",
  },
  {
    icon: <Icon.Menu />,
    name: "Menu",
  },
  {
    icon: <Icon.MessageCircle />,
    name: "MessageCircle",
  },
  {
    icon: <Icon.MessageSquare />,
    name: "MessageSquare",
  },
  {
    icon: <Icon.MicOff />,
    name: "MicOff",
  },
  {
    icon: <Icon.Mic />,
    name: "Mic",
  },
  {
    icon: <Icon.Minimize2 />,
    name: "Minimize2",
  },
  {
    icon: <Icon.Minimize />,
    name: "Minimize",
  },
  {
    icon: <Icon.MinusCircle />,
    name: "MinusCircle",
  },
  {
    icon: <Icon.MinusSquare />,
    name: "MinusSquare",
  },
  {
    icon: <Icon.Minus />,
    name: "Minus",
  },
  {
    icon: <Icon.Monitor />,
    name: "Monitor",
  },
  {
    icon: <Icon.Moon />,
    name: "Moon",
  },
  {
    icon: <Icon.MoreHorizontal />,
    name: "MoreHorizontal",
  },
  {
    icon: <Icon.MoreVertical />,
    name: "MoreVertical",
  },
  {
    icon: <Icon.Move />,
    name: "Move",
  },
  {
    icon: <Icon.Music />,
    name: "Music",
  },
  {
    icon: <Icon.Navigation2 />,
    name: "Navigation2",
  },
  {
    icon: <Icon.Navigation />,
    name: "Navigation",
  },
  {
    icon: <Icon.Octagon />,
    name: "Octagon",
  },
  {
    icon: <Icon.Package />,
    name: "Package",
  },
  {
    icon: <Icon.Paperclip />,
    name: "Paperclip",
  },
  {
    icon: <Icon.PauseCircle />,
    name: "PauseCircle",
  },
  {
    icon: <Icon.Pause />,
    name: "Pause",
  },
  {
    icon: <Icon.Percent />,
    name: "Percent",
  },
  {
    icon: <Icon.PhoneCall />,
    name: "PhoneCall",
  },
  {
    icon: <Icon.PhoneForwarded />,
    name: "PhoneForwarded",
  },
  {
    icon: <Icon.PhoneIncoming />,
    name: "PhoneIncoming",
  },
  {
    icon: <Icon.PhoneMissed />,
    name: "PhoneMissed",
  },
  {
    icon: <Icon.PhoneOff />,
    name: "PhoneOff",
  },
  {
    icon: <Icon.PhoneOutgoing />,
    name: "PhoneOutgoing",
  },
  {
    icon: <Icon.Phone />,
    name: "Phone",
  },
  {
    icon: <Icon.PieChart />,
    name: "PieChart",
  },
  {
    icon: <Icon.PlayCircle />,
    name: "PlayCircle",
  },
  {
    icon: <Icon.Play />,
    name: "Play",
  },
  {
    icon: <Icon.PlusCircle />,
    name: "PlusCircle",
  },
  {
    icon: <Icon.PlusSquare />,
    name: "PlusSquare",
  },
  {
    icon: <Icon.Plus />,
    name: "Plus",
  },
  {
    icon: <Icon.Pocket />,
    name: "Pocket",
  },
  {
    icon: <Icon.Power />,
    name: "Power",
  },
  {
    icon: <Icon.Printer />,
    name: "Printer",
  },
  {
    icon: <Icon.Radio />,
    name: "Radio",
  },
  {
    icon: <Icon.RefreshCcw />,
    name: "RefreshCcw",
  },
  {
    icon: <Icon.RefreshCw />,
    name: "RefreshCw",
  },
  {
    icon: <Icon.Repeat />,
    name: "Repeat",
  },
  {
    icon: <Icon.Rewind />,
    name: "Rewind",
  },
  {
    icon: <Icon.RotateCcw />,
    name: "RotateCcw",
  },
  {
    icon: <Icon.RotateCw />,
    name: "RotateCw",
  },
  {
    icon: <Icon.Rss />,
    name: "Rss",
  },
  {
    icon: <Icon.Save />,
    name: "Save",
  },
  {
    icon: <Icon.Scissors />,
    name: "Scissors",
  },
  {
    icon: <Icon.Search />,
    name: "Search",
  },
  {
    icon: <Icon.Send />,
    name: "Send",
  },
  {
    icon: <Icon.Server />,
    name: "Server",
  },
  {
    icon: <Icon.Settings />,
    name: "Settings",
  },
  {
    icon: <Icon.Share2 />,
    name: "Share2",
  },
  {
    icon: <Icon.Share />,
    name: "Share",
  },
  {
    icon: <Icon.ShieldOff />,
    name: "ShieldOff",
  },
  {
    icon: <Icon.Shield />,
    name: "Shield",
  },
  {
    icon: <Icon.ShoppingBag />,
    name: "ShoppingBag",
  },
  {
    icon: <Icon.ShoppingCart />,
    name: "ShoppingCart",
  },
  {
    icon: <Icon.Shuffle />,
    name: "Shuffle",
  },
  {
    icon: <Icon.Sidebar />,
    name: "Sidebar",
  },
  {
    icon: <Icon.SkipBack />,
    name: "SkipBack",
  },
  {
    icon: <Icon.SkipForward />,
    name: "SkipForward",
  },
  {
    icon: <Icon.Slack />,
    name: "Slack",
  },
  {
    icon: <Icon.Slash />,
    name: "Slash",
  },
  {
    icon: <Icon.Sliders />,
    name: "Sliders",
  },
  {
    icon: <Icon.Smartphone />,
    name: "Smartphone",
  },
  {
    icon: <Icon.Smile />,
    name: "Smile",
  },
  {
    icon: <Icon.Speaker />,
    name: "Speaker",
  },
  {
    icon: <Icon.Square />,
    name: "Square",
  },
  {
    icon: <Icon.Star />,
    name: "Star",
  },
  {
    icon: <Icon.StopCircle />,
    name: "StopCircle",
  },
  {
    icon: <Icon.Sun />,
    name: "Sun",
  },
  {
    icon: <Icon.Sunrise />,
    name: "Sunrise",
  },
  {
    icon: <Icon.Sunset />,
    name: "Sunset",
  },
  {
    icon: <Icon.Tablet />,
    name: "Tablet",
  },
  {
    icon: <Icon.Tag />,
    name: "Tag",
  },
  {
    icon: <Icon.Target />,
    name: "Target",
  },
  {
    icon: <Icon.Terminal />,
    name: "Terminal",
  },
  {
    icon: <Icon.Thermometer />,
    name: "Thermometer",
  },
  {
    icon: <Icon.ThumbsDown />,
    name: "ThumbsDown",
  },
  {
    icon: <Icon.ThumbsUp />,
    name: "ThumbsUp",
  },
  {
    icon: <Icon.ToggleLeft />,
    name: "ToggleLeft",
  },
  {
    icon: <Icon.ToggleRight />,
    name: "ToggleRight",
  },
  {
    icon: <Icon.Trash2 />,
    name: "Trash2",
  },
  {
    icon: <Icon.Trash />,
    name: "Trash",
  },
  {
    icon: <Icon.Trello />,
    name: "Trello",
  },
  {
    icon: <Icon.TrendingDown />,
    name: "TrendingDown",
  },
  {
    icon: <Icon.TrendingUp />,
    name: "TrendingUp",
  },
  {
    icon: <Icon.Triangle />,
    name: "Triangle",
  },
  {
    icon: <Icon.Truck />,
    name: "Truck",
  },
  {
    icon: <Icon.Tv />,
    name: "Tv",
  },
  {
    icon: <Icon.Twitter />,
    name: "Twitter",
  },
  {
    icon: <Icon.Type />,
    name: "Type",
  },
  {
    icon: <Icon.Umbrella />,
    name: "Umbrella",
  },
  {
    icon: <Icon.Underline />,
    name: "Underline",
  },
  {
    icon: <Icon.Unlock />,
    name: "Unlock",
  },
  {
    icon: <Icon.UploadCloud />,
    name: "UploadCloud",
  },
  {
    icon: <Icon.Upload />,
    name: "Upload",
  },
  {
    icon: <Icon.UserCheck />,
    name: "UserCheck",
  },
  {
    icon: <Icon.UserMinus />,
    name: "UserMinus",
  },
  {
    icon: <Icon.UserPlus />,
    name: "UserPlus",
  },
  {
    icon: <Icon.UserX />,
    name: "UserX",
  },
  {
    icon: <Icon.User />,
    name: "User",
  },
  {
    icon: <Icon.Users />,
    name: "Users",
  },
  {
    icon: <Icon.VideoOff />,
    name: "VideoOff",
  },
  {
    icon: <Icon.Video />,
    name: "Video",
  },
  {
    icon: <Icon.Voicemail />,
    name: "Voicemail",
  },
  {
    icon: <Icon.Volume1 />,
    name: "Volume1",
  },
  {
    icon: <Icon.Volume2 />,
    name: "Volume2",
  },
  {
    icon: <Icon.VolumeX />,
    name: "VolumeX",
  },
  {
    icon: <Icon.Volume />,
    name: "Volume",
  },
  {
    icon: <Icon.Watch />,
    name: "Watch",
  },
  {
    icon: <Icon.WifiOff />,
    name: "WifiOff",
  },
  {
    icon: <Icon.Wifi />,
    name: "Wifi",
  },
  {
    icon: <Icon.Wind />,
    name: "Wind",
  },
  {
    icon: <Icon.XCircle />,
    name: "XCircle",
  },
  {
    icon: <Icon.XSquare />,
    name: "XSquare",
  },
  {
    icon: <Icon.X />,
    name: "X",
  },
  {
    icon: <Icon.Youtube />,
    name: "Youtube",
  },
  {
    icon: <Icon.ZapOff />,
    name: "ZapOff",
  },
  {
    icon: <Icon.Zap />,
    name: "Zap",
  },
  {
    icon: <Icon.ZoomIn />,
    name: "ZoomIn",
  },
  {
    icon: <Icon.ZoomOut />,
    name: "ZoomOut",
  },
];

const FeatherIcon = ({ icon }) => (
  <Col md="6" lg="3">
    <div className="mb-2">
      {React.cloneElement(icon.icon, {
        className: "feather align-middle me-2",
      })}
      <span className="align-middle">{icon.name}</span>
    </div>
  </Col>
);

const FeatherIcons = () => (
  <React.Fragment>
    <Helmet title="Feather" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Feather</h1>

      <Card>
        <Card.Header>
          <Card.Title tag="h5">Feather Icons</Card.Title>
          <h6 className="card-subtitle text-muted">
            Simply beautiful open source icons
          </h6>
        </Card.Header>
        <Card.Body>
          <Row>
            {icons.map((icon, iconKey) => (
              <FeatherIcon icon={icon} key={iconKey} />
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  </React.Fragment>
);

export default FeatherIcons;
